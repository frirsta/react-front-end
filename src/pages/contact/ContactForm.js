import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/Contact.module.css";
import ButtonStyles from "../../styles/Buttons.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
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
      await axiosReq.post("/contact/", formData)
      .then(
          toast.success('Your message has been sent!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })

          )
      history.push(`/`); 
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const contactFields = (
    <div>
      <Form.Group>
        <Form.Label>title</Form.Label>
        <Form.Control
          className={styles.Title}
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
          className={styles.Content}
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
    <Container className={styles.Form}>
      <Form onSubmit={handleSubmit}>
        <Container>{contactFields}</Container>
      </Form>
    
    </Container>
  );
}

export default ContactForm;
