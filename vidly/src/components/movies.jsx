import React, { Component } from "react";
import Like from "./common/like";
import {
  // deleteMovie,
  getMovies,
  // getMovie,
  // saveMovie,
} from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleClick = (movie) => {
    let movies = [...this.state.movies]; //clone
    const index = movies.indexOf(movie);
    movies[index] = { ...this.state.movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };

  render() {
    const { movies } = this.state;
    const { length: count } = movies;
    // console.log(movies[0].genre.name);

    if (count === 0)
      return <p className="mt-3">Their are no movies in the database</p>;

    return (
      <React.Fragment>
        <p className="mt-2">
          Showing {count} movie{count === 1 ? "" : "s"} in the database
        </p>
        {/* table.table>thead>tr*2>th*4   Emmet Abbreviation */}
        <table className="table ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th colSpan="3">Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.like}
                      onClick={() => this.handleClick(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm mt-2"
                      onClick={() => {
                        this.handleDelete(movie);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
