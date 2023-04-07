import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import styles from '../../styles/Accounts.module.css';
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../context/CurrentUserContext";
import { Container } from "react-bootstrap";

const AccountUpdateForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [accountData, setAccountData] = useState({
    bio: "",
    profile_image: "",
  });

  const { bio, profile_image } = accountData;
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/accounts/${id}`);
          const { bio, profile_image } = data;
          setAccountData({ bio, profile_image });
        } catch (err) {
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };
    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setAccountData({
      ...accountData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("bio", bio);

    if (imageFile?.current?.files[0]) {
      formData.append("profile_image", imageFile?.current?.files[0]);
    }
    try {
      const { data } = await axiosReq.put(`/accounts/${id}`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.profile_image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textField = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={bio}
          onChange={handleChange}
          name="bio"
          rows={4}
        />
      </Form.Group>
      {errors?.bio?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button onClick={() => history.goBack()}>cancel</Button>
      <Button type="submit">save</Button>
    </>
  );

  return (
    <Form className={styles.Form} onSubmit={handleSubmit}>
      <Form.Group>
        {profile_image && (
          <figure>
            <Image src={profile_image} />
          </figure>
        )}
        {errors?.profile_image?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <div>
          <Form.Label htmlFor="profile_image-upload">
            Change profile image
          </Form.Label>
        </div>
        <Form.File
          id="profile_image-upload"
          ref={imageFile}
          accept="image/*"
          onChange={(event) => {
            if (event.target.files.length) {
              setAccountData({
                ...accountData,
                profile_image: URL.createObjectURL(event.target.files[0]),
              });
            }
          }}
        />
      </Form.Group>
      <Container>{textField}</Container>
    </Form>
  );
};

export default AccountUpdateForm;
