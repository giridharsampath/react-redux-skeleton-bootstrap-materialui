import { appStateActions } from "#actionTypes";
import _ from "lodash";

const initialState = {
  // loading: true,
  alerts: [],
  confirmation: {
    open: false,
    mainText: "Are you sure",
    subText: "This action cannot be undone",
    negative: () => {},
    positive: () => {},
  },
  message: "Welcome to the app. Connected to redux store.",
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case appStateActions.SET_LOADING.SUCCESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case appStateActions.SET_LOADING.FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case appStateActions.SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, payload],
      };
    case appStateActions.REMOVE_ALERT:
      return {
        ...state,
        alerts: _.filter(state.alerts, (alert) => alert.id !== payload),
      };
    case appStateActions.CONFIRMATION_DIALOG.SUCCESS: {
      return {
        ...state,
        confirmation: payload,
      };
    }
    case appStateActions.CONFIRMATION_DIALOG.FAILURE: {
      return {
        ...state,
        confirmation: initialState.confirmation,
      };
    }
    default:
      return state;
  }
};
