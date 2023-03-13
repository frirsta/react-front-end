import SideBar from "./components/SideBar";
import { Route, Switch } from "react-router-dom/";
import { Container } from "react-bootstrap";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
    <Container>
    <SideBar />
    <Switch>
    <Route exact path="/" render={() => <h1 className={styles.main}>Home</h1>} />
    <Route exact path="/signin" render={() => <h1 className={styles.main}>Sign in</h1>} />
    <Route exact path="/signup" render={() => <h1 className={styles.main}>Sign up</h1>} />
    <Route render={() => <h1 className={styles.main}>Page not found</h1>} />
  </Switch>
  </Container>
  </div>
  );
}

export default App;
