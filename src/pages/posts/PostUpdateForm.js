import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PostAdd.module.css";
import ButtonStyles from '../../styles/Buttons.module.css';

function PostUpdateForm() {
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    caption: "",
    post_image: "",
  });

  const { caption, post_image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { caption, post_image, is_owner } = data;

        is_owner ? setPostData({ caption, post_image }) : history.push("/");
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(post_image);
      setPostData({
        ...postData,
        post_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("caption", caption);

    if (imageInput?.current?.files[0]) {
      formData.append("post_image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/posts/${id}`, formData);
      history.push(`/posts/${id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const postFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          type="text"
          name="caption"
          value={caption}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.caption?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <div className={styles.UpdateButtons}>
      <Button className={ButtonStyles.Button} onClick={() => history.goBack()}>
        Cancel
      </Button>

      <Button className={ButtonStyles.Button} type="submit">
        Save
      </Button>
      </div>
    </div>
  );

  return (
    <Container className={styles.FormContainer}>
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Form.Group className={styles.UploadPost}>

              <figure>
                <Image className={styles.Image} src={post_image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${ButtonStyles.Button} ${ButtonStyles.ChangeImage} btn`}
                  htmlFor="add-image"
                >
                  Change Image
                </Form.Label>
              </div>


          <Form.File
            id="add-image"
            accept="image/*"
            onChange={handleImageChange}
            ref={imageInput}
            className={styles.AddPostButton}
          />
        </Form.Group>
        {errors.post_image?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Container>{postFields}</Container>
      </Form>
    </Container>
  );
}

export default PostUpdateForm;
