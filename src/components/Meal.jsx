import {Link} from "react-router-dom";

function Meal(props) {

	console.log('m_props=', props)

	const {strMeal, idMeal, strMealThumb/*, strInstructions*/} = props.meal;

	return <div className="card">
		<div className="card-image">
			<img src={strMealThumb}  alt={strMeal}/>

		</div>
		<div className="card-content">
			<span className="card-title">{strMeal}</span>
			{/*<p>{strInstructions.slice(0,70)}...</p>*/}
		</div>
		<div className="card-action">
			<Link to={`/meal/${idMeal}`} className="btn" >Watch recipe</Link>
		</div>
	</div>
}

export {Meal}
