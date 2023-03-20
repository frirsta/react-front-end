import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NotFound from "../../assets/not_found.png";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import styles from "../../styles/PostsPage.module.css";
import Asset from "../../components/Asset";

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
    <Container className={styles.PostsPageContainer}>
      <div className={styles.ExploreAccounts}>Explore accounts</div>
      <div className={styles.PostContainer}>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container className={styles.NotFoundContainer}>
                <Asset src={NotFound} message={message} />
               
                
                </Container>
            )}
          </>
        ) : (
          <Container className={styles.NotFoundContainer}>
             <Asset spinner />
            </Container>
         
        )}
      </div>
    </Container>
  );
}

export default PostsPage;
