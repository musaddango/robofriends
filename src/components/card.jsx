import './cards.css'
import 'tachyons';

function Card({name, email}){

	return(
		<div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${name}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;