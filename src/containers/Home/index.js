import React from 'react';
import Search from '../Search';
import getRecipes from '../../services/recipes';
import RecipeList from '../../components/RecipeList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  handleSearch = inputValue => {
    getRecipes({ i: inputValue })
      .then(response => {
        this.setState({
          recipes: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}

export default Home;
