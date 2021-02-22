import React from 'react'

import "./card.css"


 class Collapse extends React.Component {

    state = {
        showContent: false
    }
    
    showMore = () => {
        this.setState({showContent: !this.state.showContent})
    }

    componentDidMount(){
        console.log("component yaradıldı")
    }
    componentDidUpdate(){
        console.log("component yeniləndi")
    }



    render() {
        return (
            <div>
            <button className="btn btn-primary w-100" onClick={this.showMore}>
                {/* {this.props.children.props.cardTitle} */}
                {React.Children.map(this.props.children, children => children.props.cardTitle)}
            </button>
            {
                this.state.showContent ? (
                    <div className="active collapse show">
                        <div className="card card-body">
                            {/* {this.props.children} */}

                            {React.Children.map(this.props.children, children => children)}

                            {this.state.showContent}
                        </div>
                    </div>
                ) : null
            }
        </div>
        )
    }
}



export default Collapse;