import React from "react";
import styles from "../../styles/Accounts.module.css";
import ButtonStyle from '../../styles/Buttons.module.css';
import { useCurrentUser } from "../../context/CurrentUserContext";
import { Link } from "react-router-dom";
import Profile from "../../components/Profile";
import Button from "react-bootstrap/Button";
import { useSetAccountData } from "../../context/AccountDataContext";



const Account = (props) => {
  const { account, mobile } = props;
  const { id, following_id, profile_image, owner } = account;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const { handleFollow, handleUnfollow } = useSetAccountData();
  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"} ${styles.ExploreAccount}`}
    >
      <div>
        <Link className="align-self-center" to={`/accounts/${id}`}>
          <Profile className={styles.ExploreAccountProfileImage} src={profile_image} />
        </Link>
      </div>
      <div className={styles.WordBreak}>
        <strong className={styles.ExploreAccountName}>{owner}</strong>
      </div>
        <div className={styles.ExploreAccountsButtonsMobile}>
        {currentUser &&
          !is_owner &&
          (following_id ? (
            <Button className={`${ButtonStyle.FollowButtons} ${ButtonStyle.UnFollow}`} onClick={() => handleUnfollow(account)}>
              unfollow
            </Button>
          ) : (
            <Button className={`${ButtonStyle.FollowButtons} ${ButtonStyle.Follow}`} onClick={() => handleFollow(account)}>
              follow
            </Button>
          ))}
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button className={`${ButtonStyle.FollowButtons} ${ButtonStyle.UnFollow}`} onClick={() => handleUnfollow(account)}>
              unfollow
            </Button>
          ) : (
            <Button className={`${ButtonStyle.FollowButtons} ${ButtonStyle.Follow}`} onClick={() => handleFollow(account)}>
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Account;
