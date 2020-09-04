import {
    SET_USER_INPUT,
    SET_LIST,
    SET_EDIT,
    SET_WANTED_LIST_TO_SHOW,
  } from "../actions/actionTypes.js";

const initialState = {
    userInput: '',
    list: [],
    status: ['Not-Started', 'In-Progress', 'canceled', 'completed'],
    edit : {
        userInput: '',
        itemId: 0,
    },
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
        case SET_EDIT:
            return { ...state, edit: payload };
        case SET_WANTED_LIST_TO_SHOW:
            return { ...state, wantedListToShow: payload };
        default:
            return state;
    }
}

export default reducer;
