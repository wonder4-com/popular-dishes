import React from 'react';
import PopUpComponent from './PopUpComponent.jsx';
import Modal from './modal.jsx';
import $ from 'jquery';

class PopularDishEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visiblePopUp: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        this.setState({ visiblePopUp: !this.state.visiblePopUp })
        
    }

    render() {
        if (this.state.visiblePopUp) {
            return (
                <div>
                    <div className="PopularDish">
                        <img src={(this.props.photos.length > 0) ? this.props.photos[0].url : 'https://www.yorkshirecareequipment.com/wp-content/uploads/2018/09/no-image-available.jpg'}></img>
                        <div className="PopularDishText">
                            <span id="PopularDishName">{this.props.item.dish_name}</span>
                            <br></br>
                            <span> {this.props.photos.length} Photos &#183; {this.props.item.review_count} Reviews </span>
                        </div>
                    </div>
                    <Modal>
                        <div className="modal">
                            <button className="close-button" onClick={this.onClickHandler}> <div id="closeModal">Close</div> &#x2715; </button>
                            <PopUpComponent item={this.props.item} photos={this.props.photos} />
                        </div>
                    </Modal>
                </div>
            )
        } else {
            return (
                <div className={"PopularDish "+ this.props.item.dish_id} onClick={this.onClickHandler}>
                    <img src={(this.props.photos.length > 0) ? this.props.photos[0].url : 'https://www.yorkshirecareequipment.com/wp-content/uploads/2018/09/no-image-available.jpg'}></img>
                    <div className="PopularDishText">
                        <span id="PopularDishName">{this.props.item.dish_name}</span>
                        <br></br>
                        <span> {this.props.photos.length} Photos &#183; {this.props.item.review_count} Reviews </span>
                    </div>

                </div>
            )
        }
    }
}

export default PopularDishEntry;
