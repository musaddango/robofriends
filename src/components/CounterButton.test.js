import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CountButton from './CounterButton';


it('expect to render Card component', ()=>{
    const wrapper = shallow(<CountButton />)

    const button = wrapper.find('.button');
    button.simulate('click');
    const count = wrapper.state().count
    expect(count).toEqual(1);
    // expect(toJson(wrapper)).toMatchSnapshot();
});