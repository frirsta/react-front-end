import SideBar from "./components/SideBar";
import { Route, Switch } from "react-router-dom/";
import styles from "./App.module.css";
import SignUpForm from "./pages/auth/SignUpForm";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import { createContext } from "react";
import PostAddForm from "./pages/posts/PostAddForm";


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {

  return (
    <div className={styles.App}>
      
        <SideBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1 className={styles.main}>Feed</h1>}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/add" render={() => <PostAddForm /> } />
          <Route exact path="/notification" render={() =><h1 className={styles.main}>Notification</h1>} />
          <Route exact path="/accounts" render={() =><h1 className={styles.main}>Profile</h1>} />
          <Route
            render={() => <h1 className={styles.main}>Page not found</h1>}
          />
        </Switch>
    
    </div>

  );
}

export default App;
