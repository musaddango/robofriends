import React from 'react';

interface Props {
    color: string;
}

interface IState {
    count: number;
    color?: string
}

export default class CounterButton extends React.Component<React.ComponentProps<'div'>, IState> {
    constructor(props: Props){
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(prevProp, nextState){
        return true
    }

    updateCount = (): void =>{
        this.setState((state)=>{
            return {count: state.count + 1}
        });
    }

    render(): React.JSX.Element {
        return (
            <button className='button' color={this.state.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        )
    }
}