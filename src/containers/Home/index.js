import React from 'react';
import Search from '../Search';
import getRecipes from '../../services/recipes';

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
          recipes: response.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Search onSearch={this.handleSearch} />
      </div>
    );
  }
}

export default Home;
