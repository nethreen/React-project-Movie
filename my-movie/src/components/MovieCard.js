import React from "react";
// import axios from "axios";

const MovieCard = () => {
  return (
    <div className="moviecard">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="moviecard-img">
            {/* <img src={imageURL} alt="" /> */}
          </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
          <div className="moviecard-content">
            <div className="moviecard-content-top">
              {/* <h3>{this.state.name}</h3>
              <span className="moviecard-rating">{this.state.rating}</span> */}
            </div>
            {/* <p>{this.state.overview}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
