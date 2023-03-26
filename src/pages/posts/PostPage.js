import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import styles from "../../styles/PostsPage.module.css";
import CommentsAddForm from "../comments/CommentsAddForm";
import { useCurrentUser } from "../../context/CurrentUserContext";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [comment, setComment] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;

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
    <Container className={styles.PostsList}>
      <Post {...post.results[0]} setPost={setPost} postPage />
      {currentUser ? (
        <CommentsAddForm
          accounts_id={currentUser.accounts_id}
          profileImage={profile_image}
          post={id}
          setPost={setPost}
          setComment={setComment}
        />
      ) : comment.results.length ? (
        "Comments"
      ) : null}
    </Container>
  );
}

export default PostPage;
