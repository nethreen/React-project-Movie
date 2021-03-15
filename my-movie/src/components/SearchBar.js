import React,{Component}  from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {cartAction} from '../redux/actions/card.action';
import 'reactjs-popup/dist/index.css';


class SearchBar extends Component {

    // state = {
    //     value : 0
    // }

    // formSubmit = (event) =>{
    //     event.preventDefault();
    // }


    // increment = () => {
    //     this.setState({value : this.state.value + 1},()  => this.props.cartAction(this.state.value))
    // }
    // decrement = () => {
    //     this.setState({value : this.state.value - 1}, () => this.props.cartAction(this.state.value))
    // }

    render() {
        return (
        <div>
                {/* <button onClick={() => this.decrement()}>azalt</button>
                <span className="span">{this.state.value}</span>
                <button onClick={() => this.increment()}>artan</button> */}
            <form action="" onSubmit={this.formSubmit}>
                <div className="form-row mb-5 align-items-center  mt-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 sm-order-4">
                        <input type="text" onChange={this.props.searchMovieProp} className="form-control search-input" placeholder="Search Your Movie"/>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(
//         {
//             cartAction : data => cartAction(data)
//         },
//         dispatch
//     )
// }
// connect(null,mapDispatchToProps)
export default SearchBar;