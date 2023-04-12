import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Profile from "../../components/Profile";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/Comments.module.css";
import ButtonStyles from '../../styles/Buttons.module.css';

function CommentsAddForm(props) {
  const { post, setPost, setComments, profileImage, accounts_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
        // console.log(err)
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.Form}>
      <Form.Group className={styles.CommentFormGroup}>
        <InputGroup className={styles.AddComment}>
        <Link to={`/accounts/${accounts_id}`}>
          <span>
            <Profile className={styles.profileImageStyles} src={profileImage} />
          </span>
        </Link>

    
        <Form.Control
          className={styles.CommentsInput}
          value={content}
          onChange={handleChange}
          type="text"
          placeholder="Leave a comment..."
        />
        </InputGroup>
      </Form.Group>
      <Button
        className={`${styles.CommentsButton} ${ButtonStyles.Button}`}
        type="submit"
        disabled={!content.trim()}
      >
        Submit
      </Button>
    </Form>
  );
}

export default CommentsAddForm;
