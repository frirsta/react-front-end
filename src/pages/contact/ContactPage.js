import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import NotFound from "../../assets/not_found.png";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Contact from "./Contact";
import styles from "../../styles/Contact.module.css";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../context/CurrentUserContext";

function ContactPage({ message, filter = "" }) {
  const currentUser = useCurrentUser();
  const [contact, setContact] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const { data } = await axiosReq.get(`/contact/?${filter}search=${query}`);
        setContact(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchContact();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container className={styles.ContactPageContainer}>
    <div>
      <Form onSubmit={handleSearch} className={styles.SearchBar}>
        <i className={`${styles.SearchIcon} fa-solid fa-magnifying-glass`} />
        <Form.Control
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearchChange}
        />
      </Form>
      {hasLoaded ? (
        <>
          <div className={styles.ContactsList}>
            {contact.results.length ? (
              <InfiniteScroll
               className={styles.InfiniteScroll}
                children={contact.results.map((contact) => (
                  <Contact key={contact.id} {...contact} setcontact={setContact} />
                ))}
                dataLength={contact.results.length}
                loader={<Asset spinner />}
                hasMore={!!contact.next}
                next={() => fetchMoreData(contact, setContact)}
              />
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

export default ContactPage;
