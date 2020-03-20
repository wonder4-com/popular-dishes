import React from 'react';
import StarBox from './starbox.jsx';
import Star from './star.jsx';
import PersonIcon from './personIcon.jsx';

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
        this.dateFormatter = this.dateFormatter.bind(this);
    }

    onClickHandler(e) {
        this.setState({ readMore: !this.state.readMore })
    }

    dateFormatter (date) {
        var arr = date.slice(0, 11).split("-");
        if (arr[1][0] === '0') {
            var dateWithZero = arr[1] + '/' + arr[0] + '/' + arr[2];
            return dateWithZero.slice(1);
        } else {
            return arr[1] + '/' + arr[0] + '/' + arr[2];
        }
    }


    render() {
        return (
            <div className="singleReview">
                <div className="reviewCropper">
                    <img src={this.props.data.userphoto}></img>
                </div>
                <div className="reviewUserName">
                    {this.props.data.username}
                </div>
                <div>
                <div className="tinyPerson">
                    <PersonIcon />
                </div>
                <div className="friends">
                    {this.props.data.friends}
                </div>
                <div className="tinyStar">
                    <Star className="aStar" />
                </div>
                <div className="reviewStar">
                    {this.props.data.reviews}
                </div>
                <div className="starBox">
                    <StarBox rating={this.props.data.rating} />
                </div>
                <div className="starBoxDate"> 
                    {this.dateFormatter(this.props.data.date)}
                </div>
                    <div>
                        <div className="productDescription">
                            <div id={this.props.data.user}>{(this.state.readMore) ? this.state.text : this.state.text.split(" ").slice(0, 22).join(" ")}</div>
                            {(this.props.data.text.split(" ").length > 22) ? <button onClick={this.onClickHandler}> {(this.state.readMore) ? 'Read less' : 'Read more'} </button> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Review;


// { JSON.stringify(this.props.data) }