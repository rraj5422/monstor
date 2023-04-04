import { Component } from "react";
import './search-input.css'
class SearchInput extends Component {
  render() {
    const { handleUsers, title } = this.props;
    return (
      <div className="search">
        <input
          type={"search"}
          placeholder={title}
          onChange={handleUsers}
          className={'search-box'}
        />
      </div>
    );
  }
}

export default SearchInput;
