import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBox from './SearchBox';

it('expect to render Card component', ()=>{
    const wrapper = shallow(<SearchBox />)

    expect(toJson(wrapper)).toMatchSnapshot();
});