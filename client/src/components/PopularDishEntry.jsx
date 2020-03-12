import React from 'react';
import PopUpComponent from './PopUpComponent.jsx';

class PopularDishEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visiblePopUp: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.setState({ visiblePopUp: !this.state.visiblePopUp })
    }

    render() {
        if (this.state.visiblePopUp) {
            return (
                <div>
                    <p>{this.props.item.name}</p>
                    <img src={this.props.photos[0].url} width="200"></img>
                    <span>{this.props.photos.length} Photos</span>
                    <span>{this.props.reviews.length} Reviews</span>

                    <div className="popUp">
                        <PopUpComponent item={this.props.item} photos={this.props.photos} reviews={this.props.reviews} />
                    </div>
                    <button onClick={this.onClickHandler}> Close X </button>
                </div>
            )
        } else {
            return (
                <div onClick={this.onClickHandler}>
                    <p>{this.props.item.name}</p>
             
                    <br>
                    </br>
                    <span>{this.props.photos.length} Photos</span>
                    <span>{this.props.reviews.length} Reviews</span>
                </div>
            )
        }
    }
}

export default PopularDishEntry;

// <img src={this.props.photos[0].url} width="200"></img>