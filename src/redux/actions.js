import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from "./constants.js";

export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
})

export const requestRobots = () =>{
    return async function (dispatch, ) {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    try{
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
        const robots = await request.json();
        return dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: robots});
    }
    catch(error){
        return dispatch({type: REQUEST_ROBOTS_FAILED, payload: error});
    }
    }
}