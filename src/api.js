import {API_URL} from "./config";

// Lookup full meal details by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

const getMealById = async (mealId) => {
	const response = await fetch(API_URL + 'lookup.php?i=' + mealId);

	return await response.json();
};

const getAllCategories = async () => {
	const response = await fetch(API_URL + 'categories.php');

	return await response.json();
};

const getFilteredCategory = async (name) => {
	const response = await fetch(API_URL + 'filter.php?c=' + name);

	return await response.json();
}

export {getMealById, getAllCategories, getFilteredCategory};
