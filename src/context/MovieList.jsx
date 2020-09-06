import React, { Component, Fragment } from "react";
import UserContext from "./userContext";

export default class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log(this.context.currentUser);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <div>
            <h5>Movie List Heading (context in a class component)</h5> Author:
            {context.currentUser ? context.currentUser.name : ""}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext; //static mtd of MovieList class

// context in class component
