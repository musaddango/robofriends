import React from 'react';
import CounterButton from './CounterButton';

export default class Header extends React.Component {

    shouldComponentUpdate(prev, next){
        return false;
    }
    render(){
        console.log('Header')
        return (<>
                    <h1 className='f1'>RoboFriends</h1>
                    <CounterButton color={'red'}/>
                </>
                )
    }
}