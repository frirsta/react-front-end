import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Comment from "../comments/Comment";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import styles from "../../styles/PostsPage.module.css";
import CommentsAddForm from "../comments/CommentsAddForm";
import { useCurrentUser } from "../../context/CurrentUserContext";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, {data: comments}] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`)
        ]);
        setPost({ results: [post] });
        setComments(comments)
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
          setComments={setComments}
        />
      ) : comments.results.length ? (
        "Comments"
      ) : null}
      {comments.results.length ? (
        comments.results.map((comment) => (
          <Comment key={comment.id} {...comment} setPost={setPost} setComments={setComments} />
         
        ))
      ) : currentUser ? (
        <span>No comments, be the first to comment</span>
      ) : (
        <span>
          No comments
        </span>
      )
      }
    </Container>
  );
}

export default PostPage;
