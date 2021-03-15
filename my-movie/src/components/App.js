import React from 'react'

import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import AddMovie from '../components/AddMovie';
import MovieCard from '../components/MovieCard';
import EditMovie from '../components/EditMovie';
import Login from '../components/Login';
import Register from '../components/Register';
import Navbar from '../components/Navbar';
import About from '../components/about';
import Cart from '../components/Cart';

// import CarouselSoon from '../components/CarouselSoon';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cartAction } from "../redux/actions/card.action";

class App extends React.Component {
    state = {
        movies :  [],
        search: "",  
        value : 0,    

    }

    // axios api

    componentDidMount() {
        this.getMovie()
    }
    

    
    async getMovie() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({movies : response.data})
    }

    // axios api delete

    deleteCard = async (movie) =>{
        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            mov => mov.id !== movie.id 
            )
            this.setState(state => ({
                movies: newMovieList
        }))
    }
    // axios api add
    AddMovie = async (movie) =>{
      await  axios.post(`http://localhost:3002/movies/`, movie);
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))
        this.getMovie()

    }
    // axios api edit
    EditMovie = async (id, updatedMovie) =>{
        await  axios.put(`http://localhost:3002/movies/${id}`, updatedMovie);
        this.getMovie()

    }


    searchMovie = (event) =>{
        this.setState({search:event.target.value})
    }

    incrementCard = (movie) => {

        this.setState({ value: this.state.value + 1 }, () =>
          this.props.cartAction(this.state.value)
        );

        console.log(movie)
        console.log(this.state)   
    };


    render() {

        let filterMovies = this.state.movies.filter(
            (movie) => {
                if (movie.title) {
                    return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }else {
                    return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            }
        ).sort((a,b) =>{
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0
        })

        return (
            <Router>
                <div className="background">
                    <div className="container">
                     
                        <Navbar/>
                            {/* <CarouselSoon/> */}
                        <Switch>
                            <Route path="/" exact render={() =>(
                                <>
                                    <div className="row">
                                        <div className="col-lg-12">
                                        </div>
                                        <div className="col-lg-12">
                                            <SearchBar searchMovieProp ={this.searchMovie} />
                                        </div>
                                    </div>
                                    <MovieList             
                                        movies={filterMovies}
                                        deleteCardProp = {this.deleteCard}
                                        increment = {this.incrementCard}
                                        />
                                    
                                </>
                                )}>
                            </Route>    

                            <Route path="/add" exact render={({history}) =>(
                                <AddMovie
                                onAddMovie= {(movie) => {this.AddMovie(movie)
                                    history.push("/")
                                }}/>
                                )}>
                            </Route>   
                            <Route path="/edit/:id"  render={(props) =>(
                                <EditMovie
                                {...props}
                                onEditMovie= {(id,movie) => {
                                    this.EditMovie(id,movie)
                                }}/>
                                )}>
                            </Route>   
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <Route path="/details/:id" component={MovieCard}/>
                            <Route path="/edit/:id" component={EditMovie}/>
                            <Route path="/about" component={About}/>
                            <Route path="/cart" component={Cart}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        cartAction: (data) => cartAction(data),
      },
      dispatch
    );
  };
export default connect(null, mapDispatchToProps)(App);
