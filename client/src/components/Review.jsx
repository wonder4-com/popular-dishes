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
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        this.setState({readMore: !this.state.readMore })
    }
    render () {
        return (
            <div> 
            {this.props.data.name}
            <div id={this.props.data.user}>{(this.state.readMore) ? this.state.text: this.state.text.split(" ").slice(0, Math.floor(this.state.text.split(" ").length/2)).join(" ") }</div>
            <button onClick={this.onClickHandler}> {(this.state.readMore) ? 'read less': 'read more'} </button>
            </div>
        )
    }
}

export default Review;