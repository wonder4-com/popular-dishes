import React from 'react';
import PopularDishEntry from './PopularDishEntry.jsx';
import $ from 'jquery';
import Modal from './modal.jsx';
import PopUpComponent from './PopUpComponent.jsx';

class PopularDishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibility: false,
            scrollPosition: 5,
            item: {},
            photos: [],
            index: 0
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.setView = this.setView.bind(this);
        this.popUpComponentElement = React.createRef();
        this.outsideModalHandler = this.outsideModalHandler.bind(this);
    }

    onClickHandler(e) {
        e.preventDefault();
        if (e.target.id === 'goRight') {
            $('.slider').animate({ scrollLeft: "+=630" }, 100);
        } else {
            $('.slider').animate({ scrollLeft: "-=630" }, 100);
        }
    }

    onChangeHandler(e) {
        e.preventDefault();
        this.setState({ scrollPosition: $('.slider').scrollLeft() })
    }

    setView(e, item, photos) {
        e.preventDefault();
            if (e.target.className === "close-button" || e.target.id === "closeModal" || e.target.className.includes("popper")) {
                this.setState({ item: item || {} }); //setting new item
                this.setState({ photos: photos || [] }); //setting new photos
                this.setState({ modalVisibility: !this.state.modalVisibility }); //turning modal visibility to TRUE
                // setting index of current dish in popular dishes
                this.props.popularDishes.forEach((popularDish, index) => (JSON.stringify(popularDish.item) === JSON.stringify(item)) ? this.setState({ index: index }) : null)
            } else if (e.target.id === "nextDish") {
                this.popUpComponentElement.current.resetPhotoBox();
                if (this.props.popularDishes[this.state.index + 1].photos.length > 0) {
                    console.log(JSON.stringify(this.props.popularDishes[2].photos));
                    this.setState({ item: this.props.popularDishes[this.state.index + 1].item }); //setting next item
                    this.setState({ photos: this.props.popularDishes[this.state.index + 1].photos }); //setting next photos
                    this.setState({ index: this.state.index + 1 }); // setting index to one more
                } else {
                    this.setState({ item: this.props.popularDishes[this.state.index + 1].item }); //setting next item
                    this.setState({ photos: [{url: 'https://www.yorkshirecareequipment.com/wp-content/uploads/2018/09/no-image-available.jpg'}] }); //setting next photos
                    this.setState({ index: this.state.index + 1 }); // setting index to one more
                }
            } else if (e.target.id === "previousDish") {
                this.popUpComponentElement.current.resetPhotoBox();
                if (this.props.popularDishes[this.state.index - 1].photos.length > 0) {
                    this.setState({ item: this.props.popularDishes[this.state.index - 1].item }); //setting to previous item
                    this.setState({ photos: this.props.popularDishes[this.state.index - 1].photos }); //setting previous photos
                    this.setState({ index: this.state.index - 1 }); // setting index to one less
                } else {
                    this.setState({ item: this.props.popularDishes[this.state.index - 1].item }); //setting to previous item
                    this.setState({ photos: [{url: 'https://www.yorkshirecareequipment.com/wp-content/uploads/2018/09/no-image-available.jpg'}] }); //setting previous photos
                    this.setState({ index: this.state.index - 1 }); // setting index to one less
                }
            }
    };

    outsideModalHandler(e) {
        if (e.target.className === 'modal') {
            this.setState({ modalVisibility: false });
        }
    }

    render() {
        return (
            <div>
                <div className="slider" onScroll={this.onChangeHandler} >
                    {this.props.popularDishes.map((popularDish, index) => (
                        <div className="slide" id={index}>
                            <PopularDishEntry item={popularDish.item} photos={popularDish.photos} buttonHandler={this.setView} />
                        </div>
                    ))}
                    {(this.state.scrollPosition > 20) ? <button id="goLeft" onClick={this.onClickHandler}></button> : null}
                    {(this.state.scrollPosition < 1200) ? <button id="goRight" onClick={this.onClickHandler}> </button> : null}
                </div>
                {(this.state.modalVisibility) ?
                    <Modal>
                        <div className="modal" onClick={this.outsideModalHandler}>
                            <button className="close-button" onClick={this.setView}> <div id="closeModal">Close</div> &#x2715; </button>
                            <PopUpComponent item={this.state.item} photos={this.state.photos} reviews={this.props.popularDishes[this.state.index].reviews} ref={this.popUpComponentElement} />
                            <div className="itemButtons">
                                {(this.state.index < this.props.popularDishes.length - 1) ? <button id="nextDish" onClick={this.setView}>{this.props.popularDishes[this.state.index + 1].item.dish_name} <div id="dishArrowRight"></div> </button> : null}
                                {(this.state.index > 0) ? <button id="previousDish" onClick={this.setView}>{this.props.popularDishes[this.state.index - 1].item.dish_name} <div id="dishArrowLeft"></div> </button> : null}
                            </div>
                        </div>
                    </Modal>
                    : null
                }
            </div>
        )
    }
}

export default PopularDishList;


