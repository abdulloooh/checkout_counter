import React, { Component, Fragment } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

export default class MovieList extends Component {
  static contextType = UserContext; //look into setting more than one context in class components

  componentDidMount() {
    console.log(this.context);
  }
  render() {
    return (
      <CartContext.Consumer>
        {() => (
          <UserContext.Consumer>
            {(context) => (
              <div>
                <h5>Movie List Heading (context in a class component)</h5>{" "}
                Author:
                {context.currentUser ? context.currentUser.name : ""}
              </div>
            )}
          </UserContext.Consumer>
        )}
      </CartContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext; //static mtd of MovieList class

// context in class component
