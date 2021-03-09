import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const InternalAlert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={true}
      autoHideDuration={6000}
      key={alert.id}
      action={
        <React.Fragment>
          <Button color="secondary" size="small">
            UNDO
          </Button>
          <IconButton size="small" aria-label="close" color="inherit">
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    >
      <Alert severity={alert.alertType}>{alert.msg}</Alert>
    </Snackbar>
  ));

InternalAlert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.appState.alerts,
});

export default connect(mapStateToProps)(InternalAlert);
