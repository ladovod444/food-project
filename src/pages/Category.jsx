import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getFilteredCategory} from "../api";
import {Preloader} from "../components/Preloader";

import {MealList} from "../components/MealList";

import {useHistory} from "react-router-dom";

function Category() {
	const {name} = useParams();
	const [meals, setMeals] = useState([])
	const {goBack} = useHistory();

	useEffect(() => {
		console.log('cname=', name)
		getFilteredCategory(name).then(data => {
			console.log(data)
			setMeals(data.meals);
		})
	}, [name])
	return <>
		<button className="btn" onClick={goBack} > Go back</button>
		{!meals.length ? <Preloader /> : <MealList meals={meals} /> }
	</>

}

export {Category}
