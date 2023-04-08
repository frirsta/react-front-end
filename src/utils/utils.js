import { axiosReq } from "../api/axiosDefaults";
import jwtDecode from "jwt-decode";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

export const followHelper = (account, clickedAccount, following_id) => {
  return account.id === clickedAccount.id
    ? {
        ...account,
        followed_count: account.followed_count + 1,
        following_id,
      }
    : account.is_owner
    ? {
        ...account,
        following_count: account.following_count + 1,
      }
    : account;
};

export const unfollowHelper = (account, clickedAccount) => {
  return account.id === clickedAccount.id
    ? {
        ...account,
        followed_count: account.followed_count - 1,
        following_id: null,
      }
    : account.is_owner
    ? { ...account, following_count: account.following_count - 1 }
    : account;
};

export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
