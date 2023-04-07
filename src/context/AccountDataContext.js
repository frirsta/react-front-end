import { createContext, useContext, useEffect, useState } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import { axiosReq } from "../api/axiosDefaults";

const AccountDataContext = createContext();
const SetAccountDataContext = createContext();

export const useAccountData = () => useContext(AccountDataContext);
export const useSetAccountData = () => useContext(SetAccountDataContext);

export const AccountDataProvider = ({ children }) => {
  const [accountData, setAccountData] = useState({
    pageAccount: { results: [] },
    exploreAccounts: { results: [] },
  });

  const currentUser = useCurrentUser();

  // const handleFollow = async (clickedAccount) => {
  //   try {
  //     const { data } = await axiosRes.post("/followers/", {
  //       followed: clickedAccount.id,
  //     });
  //     setAccountData((prevState) => ({
  //       ...prevState,
  //       pageAccount: {
  //         results: prevState.pageAccount.results.map((account) =>
  //           followHelper(account, clickedAccount, data.id)
  //         ),
  //       },
  //       exploreAccounts: {
  //         ...prevState.exploreAccounts,
  //         results: prevState.exploreAccounts.results.map((account) =>
  //           followHelper(account, clickedAccount, data.id)
  //         ),
  //       },
  //     }));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleUnfollow = async (clickedAccount) => {
  //   try {
  //     await axiosRes.delete(`/followers/${clickedAccount.following_id}/`);

  //     setAccountData((prevState) => ({
  //       ...prevState,
  //       pageAccount: {
  //         results: prevState.pageAccount.results.map((account) =>
  //           unfollowHelper(account, clickedAccount)
  //         ),
  //       },
  //       exploreAccounts: {
  //         ...prevState.exploreAccounts,
  //         results: prevState.exploreAccounts.results.map((account) =>
  //           unfollowHelper(account, clickedAccount)
  //         ),
  //       },
  //     }));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/accounts/?ordering=-followed_count"
        );
        setAccountData((prevState) => ({
          ...prevState,
          exploreAccounts: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [currentUser]);

  return (
    <AccountDataContext.Provider value={accountData}>
      <SetAccountDataContext.Provider
        value={setAccountData}
      >
        {children}
      </SetAccountDataContext.Provider>
    </AccountDataContext.Provider>
  );
};
