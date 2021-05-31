import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  HomePage,
  ProjectsPage,
  NotFoundPage,
  ContactMePage,
  PrivacyPolicyPage,
} from "../pages";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={HomePage} />
      <Route exact strict path="/projects" component={ProjectsPage} />
      <Route exact strict path="/contact-me" component={ContactMePage} />
      <Route
        exact
        strict
        path="/privacy-policy"
        component={PrivacyPolicyPage}
      />
      <Route exact strict path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
