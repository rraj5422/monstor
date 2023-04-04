import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("render from carslist");
    return (
      <div className="card-list">
        {monsters.map((el) => {
          return (
            <div className="card">
              <img
                alt={`${el.name}`}
                src={`https://robohash.org/${el.id}/set=set2&size=180x180`}
                className="monster-img"
              />
              <h1 className="user-name" key={el.id}>
                {el.name}
              </h1>
              <h1 className="user-name" key={el.id}>
              {el.email}
            </h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
