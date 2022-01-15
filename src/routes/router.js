import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profile } from "./../components/Profile";

function router() {
  return (
    <Router>
      <Switch>
        {/* all routes that look like /users/chris will be handled by the UserProfile component */}
        <Route path="/users/:username" component={Profile} />
      </Switch>
    </Router>
  );
}

export default router;
