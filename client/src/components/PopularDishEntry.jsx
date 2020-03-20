import React from 'react';
import PopUpComponent from './PopUpComponent.jsx';
import Modal from './modal.jsx';
import $ from 'jquery';

class PopularDishEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        e.preventDefault();
        this.props.buttonHandler(e, this.props.item, this.props.photos);
    }

    render() {
        return (
            <div onClick={this.onClickHandler}>
                <div className="PopularDish popper">
                    <img className="popper" src={(this.props.photos.length > 0) ? this.props.photos[0].url : 'https://www.yorkshirecareequipment.com/wp-content/uploads/2018/09/no-image-available.jpg'}></img>
                    <div className="PopularDishText popper">
                        <span id="PopularDishName popper">{this.props.item.dish_name}</span>
                        <br></br>
                        <span className="popper"> {this.props.photos.length} Photos &#183; {this.props.item.review_count} Reviews </span>
                    </div>
                </div>
                <div className="PopularDishEntryPriceBox popper" >
                    <div className="PopularDishEntryPrice popper">${this.props.item.price}</div>
                </div>
                    <div className="PopularDishEntryPrice1 popper">${this.props.item.price}</div>
                    
            </div>
        )
    }
}

export default PopularDishEntry;
