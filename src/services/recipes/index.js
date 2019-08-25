import axios from 'axios';

const BADI_API_URL = 'https://badi-recipes.now.sh/api';

const getRecipes = params => axios.get(BADI_API_URL, { params });

export default getRecipes;
