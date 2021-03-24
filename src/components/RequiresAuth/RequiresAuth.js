import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Routes from "../../_config/routes";

export const RequiresAuth = (ChildComponent) => (props) => {
  const history = useHistory();
  const authState = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (!authState.authenticated) history.replace(Routes.HOME);
  }, [history]);

  return <ChildComponent {...props} />;
};
