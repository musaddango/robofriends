import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from "./constants.js";
import * as reducer from './reducers.js';

describe('Reducers', ()=>{
    it('Returns initial state',()=>{
        expect(reducer.searchRobots()).toEqual(reducer.initialStateSearch)
    })

    it('Changes searchField to the action\'s payload when action is passed',()=>{
        const action = {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        }
        expect(reducer.searchRobots(undefined, action)).toEqual({searchField: 'abc'})
    })
})

describe('RequestRobots reducers test', ()=>{
    it('Returns the initial state if not given any inputs',()=>{
        expect(reducer.requestRobots()).toEqual(reducer.initialStateRobots);
    })

    it('Return initial state when an initial state is passed',()=>{
        expect(reducer.requestRobots(reducer.initialStateRobots))
        .toEqual(reducer.initialStateRobots);
    })

    it('Should handle REQUEST_ROBOTS_PENDING', ()=>{
        const mockAction = {
            type: REQUEST_ROBOTS_PENDING,
        }
        expect(reducer.requestRobots(reducer.initialStateRobots, mockAction))
        .toEqual({
            ...reducer.initialStateRobots,
            isPending: true        
        })
    })

    it('Should handle REQUEST_ROBOTS_SUCCESS',()=>{
        const mockAction = {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: []
        } 
        expect(reducer.requestRobots(reducer.initialStateRobots, mockAction))
        .toEqual({
            ...reducer.initialStateRobots,
            robots:mockAction.payload,
            isPending: false        
        })
    })

    it('Should handle REQUEST_ROBOTS_FAILED',()=>{
        const mockAction = {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error'
        }

        expect(reducer.requestRobots(reducer.initialStateRobots, mockAction))
        .toEqual({
            ...reducer.initialStateRobots,
            error: mockAction.payload  
        })
    })
})
