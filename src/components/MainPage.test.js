import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './MainPage';
import { robots } from './robots';

it('expect to render Card component', ()=>{
    const mockState = {
        robots,
        searchField: 'A',
        requestRobots: ()=>{}
    }
    const wrapper = shallow(<App 
        robots = {mockState.robots} 
        searchField = {mockState.searchField} 
        requestRobots={mockState.requestRobots}/>)

    expect(toJson(wrapper)).toMatchSnapshot();
});