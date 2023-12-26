import { CHANGE_SEARCH_FIELD } from "./constants.js";

const setSearchChange = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
})