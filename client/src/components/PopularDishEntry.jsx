import React from 'react';
import PopUpComponent from './PopUpComponent.jsx';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-root');



class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

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
                            <button id="close-button" onClick={this.onClickHandler}> Close X </button>
                            <PopUpComponent item={this.props.item} photos={this.props.photos} />
                        </div>
                    </Modal>
                </div>
            )
        } else {
            return (
                <div className="PopularDish" onClick={this.onClickHandler}>
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

// <img src={this.props.photos[0].url} width="200"></img>