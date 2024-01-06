import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from "./constants.js";
import * as actions from './actions.js';

describe('setSearchField', ()=>{
    it('Should handle setSearchField', ()=>{
        const text = 'text';
        expect(actions.setSearchField(text)).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: text,
        })
    })
});

describe('Should handle requestRobots', ()=>{
    
})
