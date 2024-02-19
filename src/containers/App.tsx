import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage.tsx';
import { requestRobots, setSearchField } from '../redux/actions.js';
import './App.css';

interface mapState {
  searchField: string,
  robots: RobotObject[],
  isPending: boolean,
}

const mapStateToProp = (state)=>({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  });
 
const mapDispatchToProp = (dispatch) =>({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  requestRobots: () => dispatch(requestRobots())
})

interface RobotObject{
  id: number,
  name: string,
  username: string,
  email: String,
}
interface AppProps {
  searchField: string,
  robots: RobotObject[],
  isPending: boolean,
  onSearchChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
  requestRobots: any,
}

class App extends Component<AppProps, {}> {
  constructor(props){
    super(props);
  }

  render() {
      return(
        <MainPage {...this.props} />
      )
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);