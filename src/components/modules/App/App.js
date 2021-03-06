import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HamburgerMenu from "../../common/HamburgerMenu";

import { useAuthContext } from "../../../context/AuthContext";
import { useSheetsContext } from "../../../context/SheetsContext";
import { useRepoContext } from "../../../context/RepoContext";
import { useLeaderboardContext } from "../../../context/LeaderboardContext";

import ScrollToTop from "../../../utils/ScrollToTop.js";
import HomeRoute from "../../../routes/HomeRoute.js";
import CreateRoute from "../../../routes/CreateRoute.js";
import LearnRoute from "../../../routes/LearnRoute.js";
import PlayRoute from "../../../routes/PlayRoute.js";
import EarnRoute from "../../../routes/EarnRoute.js";
import BlogRoute from "../../../routes/BlogRoute.js";
import SupportUsRoute from "../../../routes/SupportUsRoute.js";
import StoriesRoute from "../../../routes/StoriesRoute";
import JoinRoute from "../../../routes/JoinRoute";
import CalendarRoute from "../../../routes/CalendarRoute";
import PixilartWrapperRoute from "../../../routes/PixilartWrapperRoute";
import HangoutRoute from "../../../routes/HangoutRoute";

import MentorSignupRoute from "../../../routes/MentorSignupRoute";
import MentorshipTiersRoute from "../../../routes/MentorshipTiersRoute";

const Wildcard = () => {
  return <Redirect to="/" />;
};

function App(props) {
  return (
    <useAuthContext.Provider>
      <useSheetsContext.Provider>
        <useRepoContext.Provider>
          <useLeaderboardContext.Provider>
            <div className="App">
              <ToastContainer
                className="toast-container"
                toastClassName="toast"
                progressClassName="toast-progress"
              />
              <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <HamburgerMenu />
                <Switch>
                  <Route exact path="/" component={HomeRoute} />
                  <Route exact path="/create" component={CreateRoute} />
                  <Route exact path="/learn" component={LearnRoute} />
                  <Route exact path="/play" component={PlayRoute} />
                  <Route exact path="/earn" component={EarnRoute} />
                  <Route exact path="/join" component={JoinRoute} />
                  <Route exact path="/calendar" component={CalendarRoute} />
                  <Route exact path="/stories" component={StoriesRoute} />
                  <Route
                    path="/blog/:pathType/:authorId/:articleId"
                    component={BlogRoute}
                  />
                  <Route exact path="/support-us" component={SupportUsRoute} />
                  <Route
                    exact
                    path="/pixilart-wrapper"
                    component={PixilartWrapperRoute}
                  />
                  <Route
                    exact
                    path="/(hangout|hangouts)/"
                    component={HangoutRoute}
                  />
                  <Route
                    exact
                    path="/mentor-signup"
                    component={MentorSignupRoute}
                  />
                  <Route
                    exact
                    path="/members"
                    component={MentorshipTiersRoute}
                  />
                  <Route exact path="/*" component={Wildcard} />
                </Switch>
              </Router>
            </div>
          </useLeaderboardContext.Provider>
        </useRepoContext.Provider>
      </useSheetsContext.Provider>
    </useAuthContext.Provider>
  );
}

export default App;

/*
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
*/
