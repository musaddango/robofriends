<<<<<<< HEAD
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
// import { connect } from 'react-redux';

// const mapStateToProp = (state)=>({
//   searchfield: state.SearchBox,
// })

=======
import CardList from '../Components/cardList.js';
import SearchBox from '../Components/SearchBox.js';
import { useState, useEffect } from 'react';
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from '../Components/ErrorBoundry.js';
import './App.css';
import 'tachyons';
>>>>>>> 733d48b42de2f04628c3fc9ede0bd15782ff1684


<<<<<<< HEAD
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})})
      .catch(err => {
        throw new Error(`Error: ${err}`)
      })
  }
=======
// Functional Method using react hooks
>>>>>>> 733d48b42de2f04628c3fc9ede0bd15782ff1684

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState("");

<<<<<<< HEAD
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}
=======
	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=> response.json())
		.then((users)=> setRobots(users));
	}, [])
>>>>>>> 733d48b42de2f04628c3fc9ede0bd15782ff1684

	const onSearchChange = event=>{
		setSearchField(event.target.value);
	}

	
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		console.log(robots, searchField);

		return !robots.length ? 
			<h1 className='tc'>Loading</h1>
			: 
			(
				<div className='tc scroll'>
					<div className='Scroll'>
						<h1 className='tc f1 sega'>RoboFriends</h1>
						<SearchBox searchChange= {onSearchChange} />
					</div>
					<ErrorBoundry>
						<Scroll>
							< CardList robots={filteredRobots}/>
						</Scroll>
					</ErrorBoundry>
				</div>
			);
	}



export default App;
