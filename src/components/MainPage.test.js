import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './MainPage';
import { robots } from './robots';

let wrapper;
beforeEach(()=>{
    const mockState = {
    robots,
    searchField: 'A',
    requestRobots: jest.fn()
}
    wrapper = shallow(<App 
                    robots = {mockState.robots} 
                    searchField = {mockState.searchField} 
                    requestRobots={mockState.requestRobots}
                    />)
})

it('It renders main page without crashing.', ()=>{
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('Robots are properly filtered.', ()=>{
    const mockState2 = {
        robots:[
            {
                id: 2,
                name: 'Millie Johnson',
                email: 'techie@xmail.com'
            }
        ],
        searchField: 'A',
        requestRobots: jest.fn()
    }
  expect(wrapper.instance().filteredRobots(mockState2.robots,'Mill')).toEqual(mockState2.robots);
});