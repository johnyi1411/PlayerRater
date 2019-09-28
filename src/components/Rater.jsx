import React from 'react';
import axios from 'axios';
import { EventEmitter } from 'events';

class Rater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearSelectedPlayer();
    axios({
      method: 'post',
      url: '/players',
      data: {
        playerId: this.props.player.id,
        rating: this.state.rating
      }
    })
      .then((result) => {
        console.log('successful post', result);
      })
      .catch((err) => {
        console.log('error posting', err);
      })
  }

  render() {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
  
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Rating:
          <select value={this.state.value} onChange={this.handleChange}>
            {options}
          </select>
          <input type="submit" value="Rate"/>
        </label>
      </form>
    );
  }
}

export default Rater;
