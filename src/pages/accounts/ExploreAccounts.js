import React from "react";
import styles from "../../styles/ExploreAccounts.module.css";
import Asset from "../../components/Asset";
import Account from "./Account";
import { useAccountData } from "../../context/AccountDataContext";

const ExploreAccounts = ({ mobile }) => {
  const { popularAccounts }  = useAccountData();

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
