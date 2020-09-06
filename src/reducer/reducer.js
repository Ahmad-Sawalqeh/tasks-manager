import {
    SET_USER_INPUT,
    SET_LIST,
    SET_EDIT,
    SET_WANTED_LIST_TO_SHOW,
    SET_COUNTER
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
    counter: { 
        deleted: 2,
        edited: 4,
        NotStarted: 2,
        InProgress: 2,
        canceled: 1,
        completed: 2,
    }
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
        case SET_COUNTER:
            return { ...state, counter: payload };
        default:
            return state;
    }
}

export default reducer;
