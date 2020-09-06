import React, { Component } from "react";
import MovieList from "./MovieList";
import MovieRow from "./MovieRow";
import Login from "./Login";

export default class MoviePage extends Component {
  render() {
    return (
      <main className="container">
        <h5>Use of Context</h5>
        <h3>Movie Page Heading</h3>
        <MovieList />
        <MovieRow />
        <Login />
        {/* just something to assume change of context name value */}
        <br />
      </main>
    );
  }
}
