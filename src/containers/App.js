import CardList from '../Components/cardList.js';
import SearchBox from '../Components/SearchBox.js';
import { useState, useEffect } from 'react';
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from '../Components/ErrorBoundry.js';
import './App.css';
import 'tachyons';


// Functional Method using react hooks

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState("");

	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=> response.json())
		.then((users)=> setRobots(users));
	}, [])

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
