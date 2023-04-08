import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import styles from "../../styles/Accounts.module.css";

const AccountPasswordForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [accountData, setAccountData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = accountData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setAccountData({
      ...accountData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", accountData);
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <div>
      <Form className={styles.Form} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            placeholder="confirm new password"
            type="password"
            value={new_password1}
            onChange={handleChange}
            name="new_password1"
          />
        </Form.Group>
        {errors?.new_password1?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            placeholder="confirm new password"
            type="password"
            value={new_password2}
            onChange={handleChange}
            name="new_password2"
          />
        </Form.Group>
        {errors?.new_password2?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Button onClick={() => history.goBack()}>cancel</Button>
        <Button type="submit">save</Button>
      </Form>
    </div>
  );
};

export default AccountPasswordForm;
