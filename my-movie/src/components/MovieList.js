import React, { Component } from "react";
import "../components/App.css";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { addToCart } from "../redux/actions/card.action";
import { bindActionCreators } from "redux";

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
                <div className="add-button-parent">
                  <button
                    className="add-button" onClick={() => this.props.addToCart(movie.id)}>
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
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToCart: (id) => addToCart(id),
    },
    dispatch
  );
};


export default connect(null,mapDispatchToProps)(MovieList);
