import React, { Component } from "react";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">React Class Component & Props</h1>

        {/* Passing props */}
        <Greeting name="Naol"/>

        <div className="card-wrapper">
          <UserCard
            fullname="Naol Gonfa"
            role="Student & React Learner"
            image="https://i.pravatar.cc/150?img=3"
          />

          <UserCard
            fullname="John Doe"
            role="AI Engineer"
            image="https://i.pravatar.cc/150?img=5"
          />

        </div>

      </div>
    );
  }
}

export default App;
