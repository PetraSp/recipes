import React from 'react';
import Input from '../../components/Input';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  handleKeyDown = event => {
    if (event.keyCode === 13 && event.target.value.length > 3) {
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
      <div>
        <Input
          placeholder="Type something here..."
          value={searchValue}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Search;
