import React, { Component } from "react";
import serialize  from 'form-serialize';
class AddMovie extends Component {


    addMovieSubmit = (e) =>{
        e.preventDefault();
        const  newMovie = serialize(e.target, { hash: true });
        // console.log(newMovie);
        this.props.onAddMovie(newMovie);
    }

  render() {
    return (
       <div className="add-movies-content">
            <form className="form-container" onSubmit={this.addMovieSubmit}>
                <div className="form-row">
                <div className="form-group col-md-11">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" name="name" />
                </div>
                <div className="form-group col-md-1">
                    <label htmlFor="inputRating">Rating</label>
                    <input type="number" className="form-control" name="rating" />
                </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputImage">Image URL</label>
                        <input type="text" className="form-control" name="imageURL" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputPrice">Price ($)</label>
                        <input type="number" className="form-control" name="price" />
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="overviewTextarea">Overview</label>
                    <textarea
                    className="form-control"
                    name="overview"
                    rows="5"
                    ></textarea>
                </div>
                </div>
                <div className="form-row">
                <input type="submit" className="add-button" value="Add Movie" />
                </div>
            </form>    
      </div> 
    );
  }
}

export default AddMovie;
