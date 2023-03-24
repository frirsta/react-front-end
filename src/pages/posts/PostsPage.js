import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
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
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container className={styles.PostsPageContainer}>
      <div className={styles.PostContainer}>
        <Form onSubmit={handleSearch} className={styles.SearchBar}>
          <i
            className={`fa-solid fa-magnifying-glass`}
            
          />
          <Form.Control
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleSearchChange}
          />
        </Form>
        {hasLoaded ? (
          <>
            <div className={styles.PostsList}>
              {posts.results.length ? (
                posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))
              ) : (
                <Container className={styles.NotFoundContainer}>
                  <Asset src={NotFound} message={message} />
                </Container>
              )}
            </div>
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
