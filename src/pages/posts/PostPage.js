import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import styles from '../../styles/PostPage.module.css'

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Container className={styles.PostPageContainer}>
     <Post {...post.results[0]} setPost={setPost} postPage />
      <p>Comments</p>
    </Container>
  );
}

export default PostPage;
