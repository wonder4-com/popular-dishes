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
                <div className="item-box">
                    <div className="inner-box">
                        <img src={(this.props.photos.length > 0) ? this.props.photos[0].url : 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6'} width="250"></img>
                        <p>{this.props.item.dish_name}</p>
                        <p> {this.props.photos.length} Photos {this.props.item.review_count} Reviews </p>
                    </div>
                    <Modal>
                        <div className="modal">
                            <PopUpComponent item={this.props.item} photos={this.props.photos} />
                            <button id="close-button" onClick={this.onClickHandler}> Close X </button>
                        </div>
                    </Modal>
                </div>
            )
        } else {
            return (
                <div className="item-box" onClick={this.onClickHandler}>
                    <div className="inner-box">
                        <img src={(this.props.photos.length > 0) ? this.props.photos[0].url : 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6'} width="250"></img>
                        <p>{this.props.item.dish_name}</p>
                        <p> {this.props.photos.length} Photos {this.props.item.review_count} Reviews </p>
                    </div>
                </div>
            )
        }
    }
}

export default PopularDishEntry;

// <img src={this.props.photos[0].url} width="200"></img>