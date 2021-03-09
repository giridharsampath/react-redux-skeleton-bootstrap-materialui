import React from "react";
import { connect } from "react-redux";
import { setAlert } from "#actions/appState";

const LandingPage = ({ appState, setAlert }) => {
  return (
    <div className="container-fluid mt-2">
      {appState.message}
      <div
        className="btn btn-success"
        onClick={() => setAlert("Hello from the alert", "success", 5000)}
      >
        Click to show alert
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appState: state.appState,
  };
};

export default connect(mapStateToProps, { setAlert })(LandingPage);
