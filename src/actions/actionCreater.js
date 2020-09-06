import {
    SET_USER_INPUT,
    SET_LIST,
    SET_EDIT,
    SET_WANTED_LIST_TO_SHOW,
    SET_COUNTER
  } from "./actionTypes.js";

export const setUserInput = input => {
  return {
    type: SET_USER_INPUT,
    payload: input
  };
};

export const setList = list => {
  return {
    type: SET_LIST,
    payload: list
  };
};

export const setCounter = statistic => {
  return {
    type: SET_COUNTER,
    payload: statistic
  };
};

export const setEdit = editedItem => {
  return {
    type: SET_EDIT,
    payload: editedItem

  };
};

export const setWantedListToShow = list => {
  return {
    type: SET_WANTED_LIST_TO_SHOW,
    payload: list
  };
};
