import {
    SET_USER_INPUT,
    SET_LIST,
    SET_EDIT,
    SET_WANTED_LIST_TO_SHOW,
    SET_COUNTER
  } from "../actions/actionTypes.js";

  const initialList = {
    "tasks": [
         {
            "id": 8688789987070970897,
            "value": "create sitemap sketch, wireframe and mock-up.",
            "currentStatus": {
                "number": 3,
                "state" : "completed"
            },
            "isEditing": false,
        },
        {
            "id": 86887899875454545457,
            "value": "select technoogies stack (programming languages, frameworks and CMS).",
            "currentStatus": {
                "number": 3,
                "state" : "completed"
            },
            "isEditing": false,
        },
        {
            "id": 65765686575454545457,
            "value": "create colorfull page layouts and gets client's feedback also change the layout if required, test and upload the website to server.",
            "currentStatus": {
                "number": 1,
                "state" : "In-Progress"
            },
            "isEditing": false,
        },
        {
            "id": 657656478788487645457,
            "value": "take 1 hour break before starting of building the initial website interface.",
            "currentStatus": {
                "number": 2,
                "state" : "canceled"
            },
            "isEditing": false,
        },
        {
            "id": 657656478788445435457,
            "value": "build website by adding special features and interactivity.",
            "currentStatus": {
                "number": 0,
                "state" : "Not-Started"
            },
            "isEditing": false,
        },
        {
            "id": 6576589789988445435457,
            "value": "get content ready with the power of SEO.",
            "currentStatus": {
                "number": 1,
                "state" : "In-Progress"
            },
            "isEditing": false,
        },
        {
            "id": 6578889789988445435457,
            "value": "fix bugs ASAP and keep it up to date.",
            "currentStatus": {
                "number": 0,
                "state" : "Not-Started"
            },
            "isEditing": false,
        }
    ]
}

const initialState = {
    userInput: '',
    list: initialList.tasks,
    wantedListToShow: initialList.tasks,
    status: ['Not-Started', 'In-Progress', 'canceled', 'completed'],
    edit : {
        userInput: '',
        itemId: 0,
    },
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
