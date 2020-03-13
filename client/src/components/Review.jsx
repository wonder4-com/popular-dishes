import React from 'react';

// const Review = ({ data }) => (
//     <div> Hello from Simple Box { data } </div>
// );

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.data.text,
            readMore: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }
    render () {
        return (
            <div> 
            {this.props.data.name}
            <div> { (this.state.readMore) ? this.state.text: this.state.text.split(" ").slice(0, this.state.text.split(" ").length).join(" ") }</div>
            <button onClick={this.handleClick}> {(this.state.readMore) ? 'read less': 'read more'} </button>
            </div>
        )
    }
}

export default Review;