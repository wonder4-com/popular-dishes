import React from 'react';
import PhotoBox from './PhotoBox.jsx';
import ReviewsBox from './ReviewsBox.jsx';

class PopUpComponent extends React.Component {
    constructor(props) {
        super(props)
        this.photoBoxElement = React.createRef();
        this.resetPhotoBox = this.resetPhotoBox.bind(this);
    }

    resetPhotoBox() {
        this.photoBoxElement.current.resetCurrent();
    }

    render() {
        return (
            <div className="itemDescription">
                <PhotoBox photos={this.props.photos} ref={this.photoBoxElement} />
                <div className="smallDescription">
                    <div>
                        <div id="dishName">{this.props.item.dish_name}</div>
                        <div id="dishPrice">${this.props.item.price}.00</div>
                    </div>
                </div>
                <div className="reviewsBox">
                    <div className="smallDescriptionBorder">
                        <p>{this.props.item.description}</p>
                    </div>
                    <ReviewsBox reviews={this.props.reviews} />
                </div>
            </div>

        )
    }
}

export default PopUpComponent;


// put back into line 10 later
//<ReviewsBox reviews={reviews} />