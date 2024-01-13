import React, { Component } from 'react';
import CardList from './CardList.tsx';
import SearchBox from './SearchBox.tsx';
import Scroll from './Scroll.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import Header from './Header.tsx';
import './MainPage.css';

interface RobotObject{
    id: number,
    name: string,
    username: string,
    email: String,
  }
  interface MainPageProps {
    searchField: string,
    robots: RobotObject[],
    isPending: boolean,
    onSearchChange: void,
    requestRobots: any,
  }


class MainPage extends Component<MainPageProps> {

  componentDidMount() {
    this.props.requestRobots();
  }

  filteredRobots = (robots: RobotObject[], searchField: string) =>{
    return robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {

    //dispatch is another option that can be used to dispatch actions directly without the 
    // use of the mapDispatchToProps function.
    const {searchField, onSearchChange, robots, isPending } = this.props; 
    
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={ onSearchChange }/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filteredRobots(robots, searchField)} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default MainPage;