import React,{Component}  from 'react';

class SearchBar extends Component {

    formSubmit = (event) =>{
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <form action="" onSubmit={this.formSubmit}>
                <div className="form-row my-5">
                    <div className="col-12">
                        <input type="text" onChange={this.props.searchMovieProp} className="form-control" placeholder="Search Your Movie"/>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;