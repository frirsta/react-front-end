import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";
import styles from "../../styles/PostAdd.module.css";
import { useRedirect } from "../../hooks/useRedirect";
import ButtonStyles from "../../styles/Buttons.module.css";

function ContactForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [contactData, setContactData] = useState({
    title: "",
    content: "",
  });

  const { title, content } = contactData;

  const history = useHistory();

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);

    try {
      const { data } = await axiosReq.post("/contact/", formData);
      history.push(`/contact/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const contactFields = (
    <div className={styles.titleButtons}>
      <Form.Group>
        <Form.Label>title</Form.Label>
        <Form.Control
          className={styles.title}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
            <Form.Group>
        <Form.Label>content</Form.Label>
        <Form.Control
          className={styles.content}
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button className={ButtonStyles.Button} onClick={() => history.goBack()}>
        Cancel
      </Button>

      <Button className={ButtonStyles.Button} type="submit">
        Post
      </Button>
    </div>
  );

  return (
    <Container className={styles.FormContainer}>
      <Form onSubmit={handleSubmit}>
        <Container>{contactFields}</Container>
      </Form>
    </Container>
  );
}

export default ContactForm;
