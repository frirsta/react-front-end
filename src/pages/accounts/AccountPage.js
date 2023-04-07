import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import styles from "../../styles/Accounts.module.css";
import ExploreAccounts from "./ExploreAccounts";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useAccountData,
  useSetAccountData,
} from "../../context/AccountDataContext";
import { Button, Image, Row } from "react-bootstrap";

function AccountPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setAccountData = useSetAccountData();
  const { pageAccount } = useAccountData();
  const [account] = pageAccount.results;
  const is_owner = currentUser?.username === account?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageAccount }] = await Promise.all([
          axiosReq.get(`/accounts/${id}`),
        ]);
        setAccountData((prevState) => ({
          ...prevState,
          pageAccount: { results: [pageAccount] },
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setAccountData]);

  const mainAccount = (
    <>
      <Image src={account?.profile_image} roundedCircle />
      {account?.owner}
      {account?.posts_count}
      {account?.followers_count}
      {account?.following_count}

      <div>
        {currentUser &&
          !is_owner &&
          (account?.following_id ? (
            <Button>unfollow</Button>
          ) : (
            <Button>Follow</Button>
          ))}
      </div>
      {account?.content && <Col>{account.content}</Col>}
    </>
  );

  const mainAccountPosts = (
    <>
  
        <p>Account posts</p>
      
    </>
  );

  return (
    <Row>
        <Col>
        <ExploreAccounts mobile />
        <div>
            {hasLoaded ? (
                <>
                {mainAccount}
                {mainAccountPosts}
                </>
            ) : (
                <Asset spinner />
            )}
        </div>
        <ExploreAccounts />
        </Col>
    </Row>
  )
}

export default AccountPage;
