import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import styles from '../../styles/Comments.module.css'


function CommentsUpdateForm(props) {
  const { id, content, setDisplayUpdateForm, setComments } = props;
  const [formData, setFormData] = useState(content);

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}`, {
        content: formData.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formData.trim(),
                updated_date: "now",
              }
            : comment;
        }),
      }));
      setDisplayUpdateForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Form className={styles.UpdateCommentForm} onSubmit={handleSubmit}>
        <Form.Group className={styles.CommentInputContainer}>
          <Form.Control className={styles.CommentUpdateInput} type="text" value={formData} onChange={handleChange} />
        </Form.Group>
        <div className={styles.ButtonContainer}>
        <Button className={styles.CommentButtons} type="button" onClick={() => setDisplayUpdateForm(false)}>
          Cancel
        </Button>
        <Button className={styles.CommentButtons} type="submit" disabled={!content.trim()}>
          Save
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default CommentsUpdateForm;
