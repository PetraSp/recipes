import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  handleKeyDown = event => {
    const { onSearch } = this.props;
    const inputValue = event.target.value;
    if (event.keyCode === 13 && inputValue.length > 3) {
      onSearch(inputValue);
      this.setState({
        searchValue: ''
      });
    }
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      searchValue: value
    });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <Input
        inputWidth="100%"
        containerWidth="100%"
        placeholder="Search by Ingredients (comma separated)"
        value={searchValue}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleInputChange}
      />
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func
};

Search.defaultProps = {
  onSearch: null
};

export default Search;
