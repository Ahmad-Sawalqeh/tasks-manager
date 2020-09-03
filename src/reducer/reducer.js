import {
    SET_USER_INPUT,
    SET_LIST,
    SET_IS_EDITING,
    SET_EDITING_ITEM_ID,
    SET_WANTED_LIST_TO_SHOW,
    SET_TOGGLE_ITEMS
  } from "../actions/actionTypes.js";

const initialState = {
    userInput: '',
    list: [],
    status: ['Not-Started', 'In-Progress', 'canceled', 'completed'],
    isEditing: false,
    editingItemId: 0,
    wantedListToShow: [],
    toggleItems: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type){
        case SET_USER_INPUT:
            return { ...state, userInput: payload };
        case SET_LIST:
            return { ...state, list: payload };
        case SET_IS_EDITING:
            return { ...state, isEditing: payload };
        case SET_EDITING_ITEM_ID:
            return { ...state, editingItemId: payload };
        case SET_WANTED_LIST_TO_SHOW:
            return { ...state, wantedListToShow: payload };
        case SET_TOGGLE_ITEMS:
            return { ...state, toggleItems: payload };
        default:
            return state;
    }
}

export default reducer;
