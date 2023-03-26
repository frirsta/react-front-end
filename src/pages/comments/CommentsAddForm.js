import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import Profile from "../../components/Profile";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/Comments.module.css";

function CommentsAddForm(props) {
  const { post, setPost, setComment, profileImage, accounts_id } = props;
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
      setComment((prevComment) => ({
        ...prevComment,
        results: [data, ...prevComment.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comment_count: prevPost.results[0].comment_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.Form}>
      <Form.Group>
        <InputGroup>
        <Link to={`/accounts/${accounts_id}`}>
          <span className={styles.profile_image}>
            <Profile src={profileImage} />
          </span>
        </Link>

    
        <Form.Control
          className={styles.CommentsInput}
          value={content}
          onChange={handleChange}
          as="textarea"
          placeholder="Leave a comment..."
        />
        </InputGroup>
      </Form.Group>
      <Button
        className={styles.CommentsButton}
        type="submit"
        disabled={!content.trim()}
      >
        Submit
      </Button>
    </Form>
  );
}

export default CommentsAddForm;
