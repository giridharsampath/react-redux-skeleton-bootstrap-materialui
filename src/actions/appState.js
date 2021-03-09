import { appStateActions } from "#actionTypes";
import { v4 as uuidv4 } from "uuid";

export const setWaiting = (set) => (dispatch) => {
  dispatch({
    type: set
      ? appStateActions.SET_LOADING.SUCCESS
      : appStateActions.SET_LOADING.FAILURE,
  });
};

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: appStateActions.SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    },
  });

  setTimeout(
    () => dispatch({ type: appStateActions.REMOVE_ALERT, payload: id }),
    timeout
  );
};

export const triggerConfirmationDialog = (
  mainText,
  subText,
  positive,
  negative
) => async (dispatch) => {
  try {
    const payload = {
      open: true,
      mainText,
      subText,
      negative,
      positive,
    };
    dispatch({
      type: appStateActions.CONFIRMATION_DIALOG.SUCCESS,
      payload,
    });
  } catch (err) {
    dispatch({
      type: appStateActions.CONFIRMATION_DIALOG.FAILURE,
    });
  }
};

export const closeConfirmationDialog = () => async (dispatch) => {
  try {
    dispatch({
      type: appStateActions.CONFIRMATION_DIALOG.FAILURE,
    });
  } catch (err) {}
};
