import CardList from '../Components/cardList';
import SearchBox from '../Components/SearchBox';
import {robots} from '../Components/robots.js';
import {Component} from 'react';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';
import 'tachyons';


// Class Component Method

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchField:''
		} 
	}

	componentDidMount(){
		this.setState({robots: robots})
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then((response)=> response.json())
		// .then((users)=> this.setState({robots:users}))
	}

	onSearchChange = event=>{
		this.setState({searchField:event.target.value});
	}

	render(){
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
		});

		//if robots.length === 0 (it gives false) if robots.length !== 0 (it gives true) !robots.length gives the opposite of both scenarios.
		return !robots.length? <h1 className='tc'>Loading</h1>: 
		(
			<div className='tc scroll'>
				<div className='Scroll'>
					<h1 className='tc f1 sega'>RoboFriends</h1>
					<SearchBox searchChange= {this.onSearchChange} />
				</div>
				<ErrorBoundry>
				<Scroll>
						< CardList robots={filteredRobots}/>
				</Scroll>
				</ErrorBoundry>
			</div>
		);
	}
}

export default App;
