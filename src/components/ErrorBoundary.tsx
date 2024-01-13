import React, { Component } from 'react';

interface State {
    hasError: boolean,
}

interface Props {
    children: React.JSX.Element
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(){
        return {hasError: true};
    }

    componentDidCatch(error, info){
        console.log('There was an error!!!')
    }

    render(){
        if (this.state.hasError){
            return <h1>Ooooops! This is not good...</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;