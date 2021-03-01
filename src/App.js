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

            <Route path="/quiz/Linux">
              <QuizContainer quizType="Linux" />
            </Route>

            <Route path="/quiz/PHP">
              <QuizContainer quizType="PHP" />
            </Route>

            <Route path="/quiz/DevOps">
              <QuizContainer quizType="DevOps" />
            </Route>

            <Route path="/quiz/Docker">
              <QuizContainer quizType="Docker" />
            </Route>

            <Route path="/quiz/WordPress">
              <QuizContainer quizType="WordPress" />
            </Route>

            <Route path="/quiz/Kubernetes">
              <QuizContainer quizType="Kubernetes" />
            </Route>

            <Route path="/quiz/Laravel">
              <QuizContainer quizType="Laravel" />
            </Route>

            <Route path="/account">
              <AccountScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
