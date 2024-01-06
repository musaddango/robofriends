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
    requestRobots={mockState.requestRobots}/>)
})

it('It renders main page without crashing.', ()=>{
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('Robots are properly filtered.', ()=>{
    
})