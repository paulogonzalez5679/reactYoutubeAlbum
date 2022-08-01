import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: undefined };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="form-control"
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Ingrese enlace del video"
          value={this.state.term}
        />
        {/* <button onClick={event => this.onInputChange(event.target.value)}>Guardar</button> */}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
    
  }
}

export default SearchBar;