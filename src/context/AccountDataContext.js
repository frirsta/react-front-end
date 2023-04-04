import { createContext, useContext, useEffect, useState } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { followHelper, unfollowHelper } from "../utils/utils";

const AccountDataContext = createContext();
const SetAccountDataContext = createContext();

export const useAccountData = () => useContext(AccountDataContext);
export const useSetAccountData = () => useContext(SetAccountDataContext);

export const AccountDataProvider = ({ children }) => {
  const [accountData, setAccountData] = useState({
    pageAccount: { results: [] },
    popularAccounts: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleFollow = async (clickedAccount) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedAccount.id,
      });
      setAccountData((prevState) => ({
        ...prevState,
        pageAccount: {
          results: prevState.pageAccount.results.map((account) =>
            followHelper(account, clickedAccount, data.id)
          ),
        },
        popularAccounts: {
          ...prevState.popularAccounts,
          results: prevState.popularAccounts.results.map((account) =>
            followHelper(account, clickedAccount, data.id)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async (clickedAccount) => {
    try {
      await axiosRes.delete(`/followers/${clickedAccount.following_id}/`);

      setAccountData((prevState) => ({
        ...prevState,
        pageAccount: {
          results: prevState.pageAccount.results.map((account) =>
            unfollowHelper(account, clickedAccount)
          ),
        },
        popularAccounts: {
          ...prevState.popularAccounts,
          results: prevState.popularAccounts.results.map((account) =>
            unfollowHelper(account, clickedAccount)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/accounts/?ordering=-followed_count"
        );
        setAccountData((prevState) => ({
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
    <AccountDataContext.Provider value={accountData}>
      <SetAccountDataContext.Provider
        value={{ setAccountData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetAccountDataContext.Provider>
    </AccountDataContext.Provider>
  );
};
