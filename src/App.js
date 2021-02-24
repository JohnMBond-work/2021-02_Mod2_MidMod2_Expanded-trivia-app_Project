// this file handles the Router and Switch.

import "./App.css";
import QuizContainer from "./components/QuizContainer";
import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import AccountScreen from "./components/AccountScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // Router generates pages with in this application that can be navigated between.  "/" see Card.jsx <Link to="/">
    <div>
      <Router>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>

            <Route path="/quiz/html">
              <QuizContainer quizType="HTML" />
            </Route>

            <Route path="/quiz/javascript">
              <QuizContainer quizType="JavaScript" />
            </Route>

            <Route path="/quiz/BASH">
              <QuizContainer quizType="BASH" />
            </Route>

            <Route path="/login">
              <AccountScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
