import React from 'react';
import './imageList.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment ">
        <div>
          <form
            onSubmit={(event) => this.onFormSubmit(event)}
            className="ui form"
          >
            <div className="field">
              <label>Image Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
