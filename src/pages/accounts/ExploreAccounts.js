import React, { useEffect, useState } from "react";
import styles from "../../styles/ExploreAccounts.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../context/CurrentUserContext";
import Asset from "../../components/Asset";
import Account from "./Account";

const ExploreAccounts = ({ mobile }) => {
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
    <div className={`${mobile && "d-lg-none text-center mb-3"}`}>
      {popularAccounts.results.length ? (
        <>
          <p>Explore Accounts</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularAccounts.results.slice(0, 5).map((account) => (
                <Account key={account.id} account={account} mobile />

              ))}
            </div>
          ) : (
            <div className={`${styles.ExploreAccounts}`}>
              {popularAccounts.results.map((account) => (
   <Account key={account.id} account={account} />
              ))}
            </div>
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </div>
  );
};

export default ExploreAccounts;
