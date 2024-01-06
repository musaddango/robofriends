import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import '../containers/App.css';



class MainPage extends Component {

  componentDidMount() {
    this.props.requestRobots();
  }

  render() {

    //dispatch is another option that can be used to dispatch actions directly without the 
    // use of the mapDispatchToProps function.
    const {searchField, dispatch, onSearchChange,robots, isPending } = this.props; 

    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={ onSearchChange }/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default MainPage;