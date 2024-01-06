import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import './MainPage.css';

class MainPage extends Component {

  componentDidMount() {
    this.props.requestRobots();
  }

  filteredRobots = (robots, searchField) =>{
    return robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {

    //dispatch is another option that can be used to dispatch actions directly without the 
    // use of the mapDispatchToProps function.
    const {searchField, dispatch, onSearchChange,robots, isPending } = this.props; 
    
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