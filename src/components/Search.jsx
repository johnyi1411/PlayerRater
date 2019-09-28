import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.searchString);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.searchString} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}

export default Search;