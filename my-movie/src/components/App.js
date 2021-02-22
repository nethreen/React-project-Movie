import React  from 'react'

import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

import axios from 'axios';

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
        const response = await axios.get("http://localhost:3001/movies");
        this.setState({movies : response.data})
    }

    // deleteCard = (movie) =>{
    //     const newMovieList = this.state.movies.filter(
    //         mov => mov.id !== movie.id 
    //         )
    //         this.setState(state => ({
    //             movies: newMovieList
    //     }))
    // }
    
    // fetch api delete state
    // deleteCard = async (movie) =>{
    //     const url = `http://localhost:3001/movies/${movie.id}`;
    //     await fetch(url,{
    //         method : "DELETE"
    //     })
    //     const newMovieList = this.state.movies.filter(
    //         mov => mov.id !== movie.id 
    //         )
    //         this.setState(state => ({
    //             movies: newMovieList
    //     }))
    // }
    
    // axios api delete state


    deleteCard = async (movie) =>{
        axios.delete(`http://localhost:3001/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            mov => mov.id !== movie.id 
            )
            this.setState(state => ({
                movies: newMovieList
        }))
    }
    
    searchMovie = (event) =>{
        // console.log(event.target.value)
        this.setState({search:event.target.value})
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
