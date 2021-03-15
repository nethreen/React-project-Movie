import axios from "axios";
import React, { Component } from "react";

class EditMovie extends Component {


    state = {
        name: "",
        rating: "",
        imageURL: "",
        overview: "",
        price: ""
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response =  await axios.get(`http://localhost:3002/movies/${id}`);
        // console.log(id)
        // console.log(response)
        const movie = response.data;

        this.setState({
            name : movie.name,
            rating : movie.rating,
            imageURL : movie.imageURL,
            overview : movie.overview,
            price : movie.price
        })
    }
    addMovieSubmit = (e) =>{
        e.preventDefault();

        const { name, rating, imageURL, overview,price } = this.state;

        const id = this.props.match.params.id;

        const updatedMovie = {
            name,
            rating,
            imageURL,
            overview,
            price
        }
        this.props.onEditMovie(id, updatedMovie)
        this.props.history.push("/")
    }



    onInputChange = (e) =>{
        // console.log(e.target.value)

        this.setState({
            [e.target.name]: e.target.value
        })
    }

  render() {
    return (
       <div className="add-movies-content">
            <form className="form-container" onSubmit={this.addMovieSubmit}>
                <div className="form-row">
                <div className="form-group col-md-10">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} 
                    onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group col-md-1">
                    <label htmlFor="inputRating">Rating</label>
                    <input type="nubmer" className="form-control" name="rating" value={this.state.rating}
                     onChange={this.onInputChange}/>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-10">
                    <label htmlFor="inputImage">Image URL</label>
                    <input type="text" className="form-control" name="imageURL" value={this.state.imageURL} 
                    onChange={this.onInputChange}/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputPrice">Price ($)</label>
                    <input type="number" className="form-control" name="price" value={this.state.price} 
                    onChange={this.onInputChange}/>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="overviewTextarea">Overview</label>
                    <textarea
                    className="form-control"
                    name="overview"
                    rows="5" value={this.state.overview}
                    onChange={this.onInputChange}
                    ></textarea>
                </div>
                </div>
                <div className="form-row">
                <input type="submit" className="add-button" value="Edit Movie" />
                </div>
            </form>    
      </div> 
    );
  }
}

export default EditMovie;
