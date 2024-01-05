import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ErrorBoundary from './ErrorBoundary';

it('expect to render Card component', ()=>{
    const wrapper = shallow(<ErrorBoundary />)
    const state = wrapper.state();

    expect(state.hasError).toBe(false);

    // expect(toJson(wrapper)).toMatchSnapshot();
    // console.log(shallow(<Card />).debug());
});