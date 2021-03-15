import React, { Component } from "react";
import "../components/App.css";
import { Link } from "react-router-dom";


class MovieList extends Component {
  


  render() {
    return (
      <div className="row">
        {this.props.movies.map((movie, i) => (
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" key={i}>
            <div className="card mb-4 shadow-sm">
              <Link to={`details/${movie.id}`}>
                <img
                  src={movie.imageURL}
                  className="card-img-top"
                  alt="Movie img"
                />
              </Link>
              <div className="card-body">
                <span className="card-rating">
                  {movie.vote_average ? movie.vote_average : movie.rating}
                </span>
                <h5 className="card-title">
                  {movie.title ? movie.title : movie.name}
                </h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    onClick={(event) => this.props.deleteCardProp(movie)}
                    className="card-delete"
                  >
                    Delete
                  </button>
                  <Link
                    to={`edit/${movie.id}`}
                    type="button"
                    className="card-edit"
                  >
                    Edit
                  </Link>
                </div>
                <div className="add-button-parent">
                  <button
                    className="add-button" onClick={() => this.props.increment({movie})}>
                    Buy
                  </button>
                  <span className="card-price">
                      {movie.price ? `${movie.price}$` : "free"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


export default MovieList;
