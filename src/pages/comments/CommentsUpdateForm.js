import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";

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
<<<<<<< HEAD
      setDisplayUpdateForm(false);
=======
        setDisplayUpdateForm(false);
>>>>>>> 6f5f8fd58e74e90dbfea4be6bc0595fe13ab61c9
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control type="text" value={formData} onChange={handleChange} />
        </Form.Group>
        <Button type="button" onClick={() => setDisplayUpdateForm(false)}>
          Cancel
        </Button>
        <Button type="submit" disabled={!content.trim()}>
          Save
        </Button>
      </Form>
    </div>
  );
}

export default CommentsUpdateForm;
