import {useParams, useHistory, useRouteMatch, useLocation} from 'react-router-dom'

function Movie() {
	const params = useParams();
	const {id} = useParams();
	const {goBack, goForward} = useHistory();
	//console.log(id);
	//console.log(value);
	console.log('params', params);

	const valueLoc = useLocation();
	const valueRM = useRouteMatch();

	console.log(valueLoc);
	console.log(valueRM);

	return <>
		<h1>Some Movie with id= {id}</h1>
		<button className='btn' onClick={goBack}>назад</button>
		<button className='btn' onClick={goForward}>вперед</button>
	</>
}

export {Movie}
