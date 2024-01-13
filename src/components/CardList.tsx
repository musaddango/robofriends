import React from 'react';
import Card from './Card.tsx';

interface RobotObject{
    id: number,
    name: string,
    username?: string,
    email: string,
  }

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user: RobotObject, i: number) => {
          return (
            <Card
              key={i}
              id={user.id}
              name={user.name}
              email={user.email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;