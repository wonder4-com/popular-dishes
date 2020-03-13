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
                    <p>{this.props.item.name}</p>
                    <img src={this.props.photos[0].url} width="200"></img>
                    <div>
                        <span>{this.props.photos.length} Photos</span>
                        <span>{this.props.reviews.length} Reviews</span>
                    </div>
                    <div>
                        <Modal>
                            <div className="modal"> 
                                <PopUpComponent item={this.props.item} photos={this.props.photos} reviews={this.props.reviews} />
                                <button id="close-button" onClick={this.onClickHandler}> Close X </button>
                            </div>
                        </Modal>
                    </div>
                </div>
            )
        } else {
            return (
                <div onClick={this.onClickHandler}>
                    <p>{this.props.item.name}</p>
                    <img src={this.props.photos[0].url} width="200"></img>
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