import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";
import { observer } from "mobx-react-lite";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivitiesDetails from "../../features/activities/details/ActivitiesDetails";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  

  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/activities" component={ActivitiesDashboard} />
              <Route path="/activities/:id" component={ActivitiesDetails} />
              <Route
                key={location.key}
                path={["/createActivities", "/manage/:id"]}
                component={ActivityForm}
              />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));
