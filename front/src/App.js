import MainPage from "./components/MainPage/MainPage";
import AppBar from "./components/AppBar/AppBar";
import AuthForm from "./components/AuthForm/AuthForm";
import ButtonsForCard from "./components/ButtonsForCard/ButtonsForCard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={AuthForm} />
        <Route exact path="/game" component={ButtonsForCard} />
        {/* <Route exact path="/profile" component={Profiler} /> */}
      </Switch>
    </Router>
  );
}

export default App;
