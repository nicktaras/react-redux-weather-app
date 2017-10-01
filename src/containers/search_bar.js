import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render() {
   return (
     <form onSubmit={this.onFormSubmit} className="input-group">
       <input
        placeholder="Get a 5 day forecast in your favourite cities"
        className="form-control"
        type="text"
        value={this.state.term}
        onChange={this.onInputChange}
       />
       <span className="input-group-btn">
         <button type="submit" className="btn btn-secondary" onClick={this.onFormSubmit}>Submit</button>
       </span>
     </form>
   )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null allows us to not pass state if not required.
export default connect(null, mapDispatchToProps)(SearchBar);
