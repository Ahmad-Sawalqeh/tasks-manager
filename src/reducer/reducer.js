const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type){
        case 'setUserInput':
            return { ...state, userInput: payload };
        case 'setList':
            return { ...state, list: payload };
        case 'setIsEditing':
            return { ...state, isEditing: payload };
        case 'setEditingItemId':
            return { ...state, editingItemId: payload };
        case 'setWantedListToShow':
            return { ...state, wantedListToShow: payload };
        case 'setToggleItems':
            return { ...state, toggleItems: payload };
        default:
            return state;
    }
}

export default reducer;