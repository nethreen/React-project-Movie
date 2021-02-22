import React  from 'react'

import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

import axios from 'axios';
require('dotenv').config();


class App extends React.Component {
    state = {
        movies :  [],
        search: ""

    }
    // fetch api
    // async componentDidMount() {
    //     const baseURL = "http://localhost:3001/movies";
    //     const response = await fetch(baseURL);
    //     const data = await response.json()
    //     this.setState({movies : data})
    // }
    // axios api
    async componentDidMount() {
        const response = await axios.get(`https://api.themoviedb.org/3/list/7077478?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        this.setState({movies : response.data.items});
        console.log(response.data.items);
        
    }

    searchMovie = (event) =>{
        // console.log(event.target.value)
        this.setState({search:event.target.value})
    }
    // https://api.themoviedb.org/3/list/7077478/remove_item?media_id=495764&session_id=208233d613b0b368c1a0721cd6d3f779030a95a0&api_key=c557f40780b3e23001c20f643267b66c

    // deleteCard = (movie) =>{
    //     const newMovieList = this.state.movies.filter(
    //         mov => mov.id !== movie.id 
    //     )
    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }

    
    deleteCard = async (movie) =>{
        axios.post(`https://api.themoviedb.org/3/list/7077478/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`);
        const newMovieList = this.state.movies.filter(
            mov => mov.id !== movie.id 
        )
        this.setState(state => ({
            movies: newMovieList
        }))
    }
    render() {
        let filterMovies = this.state.movies.filter(
            (movie) => {
                if (movie.title) {
                    return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                } else {
                    return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            }
        )


        return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <SearchBar searchMovieProp ={this.searchMovie} />
                </div>
            </div>
            <MovieList             
                movies={filterMovies}
                deleteCardProp = {this.deleteCard}/>
                
        </div>
        )
    }
}
export default App;
