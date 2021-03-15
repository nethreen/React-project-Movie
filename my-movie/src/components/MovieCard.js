import React,{Component}  from 'react';
import axios from "axios";

class MovieCard extends Component {

    state = {
        name: "",
        rating: "",
        imageURL: "",
        overview: ""
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        // console.log(id)
        // console.log(response)
        const movie = response.data;

        this.setState({
            name : movie.name,
            rating : movie.rating,
            imageURL : movie.imageURL,
            overview : movie.overview
        })
    }
    render() {
        return (
        <div className="moviecard">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="moviecard-img">
                        <img src={this.state.imageURL} alt=""/>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div className="moviecard-content">
                        <div className="moviecard-content-top">
                            <h3>
                                {this.state.name}
                            </h3>
                            <span className="moviecard-rating">
                                {this.state.rating}
                            </span>
                        </div>
                        <p>{this.state.overview}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MovieCard;