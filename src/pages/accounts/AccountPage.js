import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Asset from "../../components/Asset";

import styles from "../../styles/AccountPage.module.css";
import ExploreAccounts from "./ExploreAccounts";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useAccountData,
  useSetAccountData,
} from "../../context/AccountDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import notFound from "../../assets/not_found.png";
import { fetchMoreData } from "../../utils/utils";
import { AccountUpdateDropdown } from "../../components/UserDropdown";

function AccountPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [accountPosts, setAccountsPosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setAccountData, handleFollow, handleUnfollow } = useSetAccountData();
  const { pageAccount } = useAccountData();
  const [account] = pageAccount.results;
  const is_owner = currentUser?.username === account?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageAccount }, { data: accountPosts }] =
          await Promise.all([
            axiosReq.get(`/accounts/${id}`),
            axiosReq.get(`/posts/?owner__account=${id}`),
          ]);
        setAccountData((prevState) => ({
          ...prevState,
          pageAccount: { results: [pageAccount] },
        }));
        setAccountsPosts(accountPosts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setAccountData]);

  const mainAccount = (
    <>
      <div className={styles.AccountDropdownContainer}>
        {account?.is_owner && <AccountUpdateDropdown id={account?.id} />}
        </div>
        <div className={styles.ProfileImageName}>
        <Image
          className={styles.AccountProfileImage}
          src={account?.profile_image}
          roundedCircle
        />
        {account?.owner}
        </div>
        <br></br>

        <div className={styles.AccountInformation}>
          <div className={styles.AccountInformationConatiner}>
         <div>posts</div> <div>{account?.posts_count}</div>
          </div>

          <div className={styles.AccountInformationConatiner}>
          <div>followers</div> <div>{account?.followed_count}</div>
        </div>

        <div className={styles.AccountInformationConatiner}>
         <div>following</div>  <div>{account?.following_count}</div>
          </div>
        </div>
    
      <div>
        {currentUser &&
          !is_owner &&
          (account?.following_id ? (
            <Button variant="dark" onClick={() => handleUnfollow(account)}>
              unfollow
            </Button>
          ) : (
            <Button onClick={() => handleFollow(account)}>Follow</Button>
          ))}
      </div>
      {account?.bio && <Col>{account.bio}</Col>}
    </>
  );

  const mainAccountPosts = (
    <>
      <hr />
      <p>{account?.owner}'s posts</p>
      {accountPosts.results.length ? (
        <InfiniteScroll
          children={accountPosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setAccountsPosts} />
          ))}
          dataLength={accountPosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!accountPosts.next}
          next={() => fetchMoreData(accountPosts, setAccountsPosts)}
        />
      ) : (
        <Asset
          src={notFound}
          message={`No results found, ${account?.owner} has not posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row className={styles.AccountPage}>
      <Col>
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
  );
}

export default AccountPage;
