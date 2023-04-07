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
