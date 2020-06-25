import {
    SET_USER_INPUT,
    SET_LIST,
    SET_IS_EDITING,
    SET_EDITING_ITEM_ID,
    SET_WANTED_LIST_TO_SHOW,
    SET_TOGGLE_ITEMS
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

export const setIsEditing = isEditing => {
  return {
    type: SET_IS_EDITING,
    payload: isEditing
  };
};

export const setEditingItemId = id => {
  return {
    type: SET_EDITING_ITEM_ID,
    payload: id
  };
};

export const setWantedListToShow = list => {
  return {
    type: SET_WANTED_LIST_TO_SHOW,
    payload: list
  };
};

export const setToggleItems = toggle => {
  return {
    type: SET_TOGGLE_ITEMS,
    payload: toggle
  };
};
