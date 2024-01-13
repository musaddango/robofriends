import React from 'react';

interface Props{
  name: string;
  email: string;
  id: number;
}

const Card = ({ name, email, id }: Props) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img height={'200px'} width={'200px'} alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
