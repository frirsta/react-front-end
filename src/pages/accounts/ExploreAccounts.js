import React from "react";
import styles from "../../styles/ExploreAccounts.module.css";
import Asset from "../../components/Asset";
import Account from "./Account";
import { useAccountData } from "../../context/AccountDataContext";

const ExploreAccounts = ({ mobile }) => {
  const { exploreAccounts }  = useAccountData();

  return (
    <div className={`${mobile && "d-lg-none text-center mb-3"}`}>
      {exploreAccounts.results.length ? (
        <>
          {mobile ? (
            <div className="d-flex justify-content-around">
              <p>Explore Accounts</p>
              {exploreAccounts.results.slice(0, 5).map((account) => (
                <Account key={account.id} account={account} mobile />

              ))}
            </div>
          ) : (
            <div className={`${styles.ExploreAccounts}`}>
              {exploreAccounts.results.map((account) => (
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
