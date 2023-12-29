import React from 'react';

export default class CounterButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(prevProp, nextState){
        return true
    }

    updateCount = ()=>{
        this.setState(state=>{
            return {count: state.count + 1}
        });
    }

    render(){
        console.log('CounterButton')
        return (
            <button color={this.state.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        )
    }
}