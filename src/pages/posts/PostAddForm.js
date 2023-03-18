import React, { useRef, useState } from "react";
import { Button, Container, Form, Image, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";
import styles from "../../styles/PostAdd.module.css";

function PostAddForm() {
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    caption: "",
    post_image: "",
  });

  const { caption, post_image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

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
    formData.append("post_image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
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
      <Button className={styles.Button} onClick={() => history.goBack()}>
        Cancel
      </Button>

      <Button className={styles.Button} type="submit">
        Post
      </Button>
    </div>
  );

  return (
    <Container>
    <Form onSubmit={handleSubmit} className={styles.Form}>
      <Form.Group>
        {post_image ? (
          <>
            <figure>
              <Image className={styles.Image} src={post_image} rounded />
            </figure>
            <div>
              <Form.Label
                className={`${styles.Button} btn`}
                htmlFor="add-image"
              >
                Change Image
              </Form.Label>
            </div>
          </>
        ) : (
          <Form.Label
            className="d-flex justify-content-center"
            htmlFor="add-image"
          >
            <Asset src={Upload} message="Click or tap to upload image" />
            Upload image
          </Form.Label>
        )}

        <Form.File
          id="add-image"
          accept="image/*"
          onChange={handleImageChange}
          ref={imageInput}
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

export default PostAddForm;
