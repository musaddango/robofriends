import React from 'react';
import CounterButton from './CounterButton.tsx';

export default class Header extends React.Component {

    // shouldComponentUpdate(prev, next){
    //     return false;
    // }
    render(): React.JSX.Element{
        return (<>
                    <h1 className='f1'>RoboFriends</h1>
                    <CounterButton color={'red'}/>
                </>
                )
    }
}