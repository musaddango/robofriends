import { CHANGE_SEARCH_FIELD } from "./redux/constants.js";

const initialState = {
    searchBox: ''
}

export const reducer = (state=initialState, action = {})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchBox: action.payload};
        default:
            return state;
    }
}