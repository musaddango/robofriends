import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { connect } from 'react-redux';

import { requestRobots, setSearchField } from '../redux/actions';

const mapStateToProp = (state)=>({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  });
 
const mapDispatchToProp = (dispatch) =>({
  onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
  requestRobots: ()=> dispatch(requestRobots())
})


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }

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
          <h1 className='f1'>RoboFriends</h1>
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

export default connect(mapStateToProp, mapDispatchToProp)(App);