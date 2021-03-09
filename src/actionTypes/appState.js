import { createRequestTypes } from "./common";

export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const SET_LOADING = createRequestTypes("SET_LOADING");
export const CONFIRMATION_DIALOG = createRequestTypes("CONFIRMATION_DIALOG");
