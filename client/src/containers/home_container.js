import React, { Component } from "react";

class Home extends Component {
  state = {
    arr: [
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello",
      "  Hello"
    ]
  };
  render() {
    let a = this.state.arr;
    return (
      <div className="home_container">
        {" "}
        <ul>
          {a.map(i => {
            return <li>{i}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
