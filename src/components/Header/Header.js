import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeAuth } from "../../redux/actions/auth";
import * as Routes from "../../_config/routes";

export const HeaderComponent = ({ authenticated, changeAuth }) => {
  const renderButton = React.useMemo(
    () => (
      <button onClick={() => changeAuth(!authenticated)}>
        Sign{authenticated ? " Out" : " In"}
      </button>
    ),
    [authenticated]
  );
  return (
    <header>
      <Link to={Routes.HOME}>Home</Link>
      &nbsp; &nbsp;
      <Link to={Routes.POST}>Post</Link>
      &nbsp; &nbsp;
      {renderButton}
    </header>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export const Header = connect(mapStateToProps, { changeAuth })(HeaderComponent);
