import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage.js';
import { requestRobots, setSearchField } from '../redux/actions';
import './App.css';


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

  render() {
      return(
        <MainPage {...this.props}/>
      )
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);