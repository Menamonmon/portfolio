import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage, AboutPage, ProjectsPage, NotFoundPage } from "../pages";

const Routes: React.FC = () => {
  return (
    <Switch>
        <Route exact strict path="/" component={HomePage} />
        <Route exact strict path="/about" component={AboutPage} />
        <Route exact strict path="/projects" component={ProjectsPage} />
        <Route exact strict path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
