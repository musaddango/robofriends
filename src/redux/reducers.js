import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from "./constants.js";

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action = {})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
}

export const requestRobots = (state=initialStateRobots, actions) => {
    switch(actions.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true };
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: actions.payload, isPending: false };
        case REQUEST_ROBOTS_FAILED:
            return {...state, error: actions.payload};
        default:
            return state;
    }
}