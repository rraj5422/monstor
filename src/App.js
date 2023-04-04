import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card/card-list";
import SearchInput from "./components/search/search-input";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchFilterd: "",
      title: "",
    };
  }

  fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) =>
        this.setState(
          (state, prop) => {
            return { users: json };
          },
          () => {
            console.log(this.state.users);
          }
        )
      );
  };

  componentWillMount() {
    this.fetchUsers();
  }

  handleUsers = (e) => {
    let searchFilterd = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchFilterd };
    });
  };
  handleTitle = (e) => {
    let title = e.target.value.toLowerCase();
    this.setState(() => {
      return { title };
    });
  };

  render() {
    const filteredData = this.state.users.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchFilterd);
    });
    return (
      <div className="app">
        {this.state.title&&<h1 className="app-title">{this.state.title}</h1>}
        <SearchInput handleUsers={this.handleTitle} title={'Add title'} />
        <SearchInput handleUsers={this.handleUsers} title={'Search for users'}/>
        <CardList monsters={filteredData} />
      </div>
    );
  }
}

export default App;
