import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.submitProp(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="input">Image Search</label>
            <input
              type="text"
              name="input"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            ></input>
          </div>
          <button className={`ui button ${this.props.loading}`} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
