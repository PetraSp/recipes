import React from 'react';
import Styled from 'styled-components';
import Search from '../Search';
import getRecipes from '../../services/recipes';
import RecipeList from '../../components/RecipeList';
import Container from '../../components/Container';

const HomeWrapper = Styled.div`
  margin-top: 20px;
`;

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
      <HomeWrapper>
        <Container>
          <Search onSearch={this.handleSearch} />
          <RecipeList recipes={recipes} />
        </Container>
      </HomeWrapper>
    );
  }
}

export default Home;
