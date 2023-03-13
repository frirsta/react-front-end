import SideBar from "./components/SideBar";
import { Route, Switch } from "react-router-dom/";
import { Container } from "react-bootstrap";
import styles from "./App.module.css";
import SignUpForm from "./pages/auth/SignUpForm";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";

function App() {
  return (
    <div className={styles.App}>
      <Container>
        <SideBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1 className={styles.main}>Home</h1>}
          />
          <Route
            exact
            path="/signin"
            render={() => <SignInForm />}
          />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route
            render={() => <h1 className={styles.main}>Page not found</h1>}
          />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
