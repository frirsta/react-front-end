import SideBar from "./components/SideBar";
import { Route, Switch } from "react-router-dom/";
import styles from "./App.module.css";
import SignUpForm from "./pages/auth/SignUpForm";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import { createContext } from "react";
import PostAddForm from "./pages/posts/PostAddForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./context/CurrentUserContext";
import PostUpdateForm from "./pages/posts/PostUpdateForm";
import Brand from "./components/Brand";


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <Brand />
      <SideBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <PostsPage message="No results found. Adjust the search keyword" />
          )}
        />
        <Route
          exact
          path="/feed"
          render={() => (
            <PostsPage
              message="No results found. Adjust the search keyword or follow a user"
              filter={`owner__account_followed__owner__account=${profile_id}&`}
            />
          )}
        />

        <Route exact path="/signin" render={() => <SignInForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/posts/add" render={() => <PostAddForm />} />
        <Route exact path="/posts/:id/edit" render={() => <PostUpdateForm/>} />
        <Route
          exact
          path="/likes"
          render={() => (
            <PostsPage
              message="No results found. Adjust the search keyword or like a post"
              filter={`likes__owner__account=${profile_id}&ordering=-likes__created_date&`}
            />
          )}
        />
        <Route
          exact
          path="/saved"
          render={() => (
            <PostsPage
              message="No results found. Adjust the search keyword or like a post"
              filter={`saved__owner__account=${profile_id}&ordering=-saved__created_date&`}
            />
          )}
        />
        <Route
          exact
          path="/accounts"
          render={() => <h1 className={styles.main}>Profile</h1>}
        />
        <Route exact path="/posts/:id" render={() => <PostPage />} />
        <Route render={() => <h1 className={styles.main}>Page not found</h1>} />
      </Switch>

    </div>
  );
}

export default App;
