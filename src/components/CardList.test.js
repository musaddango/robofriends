import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CardList from './CardList';

it('expect to render Card component', ()=>{
    const mockRobots = [
        {
            id: 1,
            username: 'musadango',
            name: 'Musa Dango',
            email: 'musa@x.com',
        },
        {
            id: 1,
            username: 'ajaladango',
            name: 'Ajala Dango',
            email: 'ajala@x.com',
        }
    ]
    const wrapper = shallow(<CardList robots={mockRobots} />)

    expect(toJson(wrapper)).toMatchSnapshot();
    console.log(shallow(<CardList />).debug());
});