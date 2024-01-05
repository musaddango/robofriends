import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

it('expect to render Card component', ()=>{
    const wrapper = shallow(<Header />)

    expect(toJson(wrapper)).toMatchSnapshot();
});