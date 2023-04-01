import React, { useEffect, useState } from "react";
import styles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../context/CurrentUserContext";

const ExploreAccounts = () => {
  const [accountsData, setAccountsData] = useState({
    pageAccount: { results: [] },
    popularAccounts: { results: [] },
  });

  const { popularAccounts } = accountsData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/accounts/?ordering=-followed_count"
        );
        setAccountsData((prevState) => ({
          ...prevState,
          popularAccounts: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [currentUser]);

  return (
    <div className={styles.ExploreAccounts}>
{popularAccounts.results.map((account) => (
  <p key={account.id}>{account.owner}</p>
))}
    </div>
  );
};

export default ExploreAccounts;
