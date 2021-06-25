import MainPage from "./components/MainPage/MainPage";
import AppBar from "./components/AppBar/AppBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/registration" component={Registration} /> */}
        {/* <Route exact path="/login" component={Login}/> */}
        {/* <Route exact path="/profile" component={Profiler} /> */}
      </Switch>
    </Router>
  );
}

export default App;
