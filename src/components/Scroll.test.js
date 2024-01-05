import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Scroll from './Scroll';

it('expect to render Card component', ()=>{
    const wrapper = shallow(<Scroll />)

    expect(toJson(wrapper)).toMatchSnapshot();
});