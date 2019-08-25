function ingredientsStringToArray(ingredientsStr) {
  return ingredientsStr.split(',');
}

function hasLactose(ingredientsStr) {
  return ingredientsStr.includes('milk') || ingredientsStr.includes('cheese');
}

export default ingredientsStringToArray;

export { hasLactose };
