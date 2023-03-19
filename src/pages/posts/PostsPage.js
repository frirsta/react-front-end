import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import styles from "../../styles/PostPage.module.css";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchPosts();

  }, [filter, pathname]);

  return (
    <Container className={styles.PostPageContainer}>
      <div>explore accounts</div>
      <div>
        {hasLoaded ? (
            <>
            {posts.results.length ? (
                posts.results.map(post => (
                    <Post key={post.id} {...post} setPosts={setPosts} />
                ))
            ) : (
                console.log("show no results image")
            )}
            </>
        ) : (
            console.log("loading spinner")
        ) }
        </div>
      <p>Comments</p>
    </Container>
  );
}

export default PostsPage;
