import SideBar from "./components/SideBar";
import { Route, Switch } from "react-router-dom/";
import styles from "./App.module.css";
import SignUpForm from "./pages/auth/SignUpForm";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import PostAddForm from "./pages/posts/PostAddForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./context/CurrentUserContext";
import PostUpdateForm from "./pages/posts/PostUpdateForm";
import AccountPage from "./pages/accounts/AccountPage";
import UsernameForm from "./pages/accounts/UsernameForm";
import AccountUpdateForm from "./pages/accounts/AccountUpdateForm";
import AccountPasswordForm from "./pages/accounts/AccountPasswordForm";
import NotFound from "./components/NotFound";
import BrandMobile from "./components/BrandMobile";
import ContactForm from "./pages/contact/ContactForm";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  return (
    <div className={styles.App}>
      <SideBar />
     <BrandMobile/>
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
         <Route exact path="/accounts/:id" render={() => <AccountPage />} />
         <Route exact path="/accounts/:id/update/password" render={() => <AccountPasswordForm />} />
         <Route exact path="/accounts/:id/update/username" render={() => <UsernameForm />} />
         <Route exact path="/accounts/:id/update" render={() => <AccountUpdateForm />} />
        <Route exact path="/posts/:id" render={() => <PostPage />} />
        <Route exact path="/contactform/" render={() => <ContactForm />} />
        <Route exact path="/contact/" render={() => <ContactPage />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}
export default App;
