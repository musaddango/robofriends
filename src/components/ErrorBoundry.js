import { Component } from 'react';

class ErrorBoundry extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(){
		return {hasError: true};
	}

	componentDidCatch(error, info){
		console.log('An error occured!!!');
	}

	render(){
		return this.state.hasError? <h1>Something went wrong</h1> :
		(
			this.props.children
		);	
	}

}

export default ErrorBoundry;