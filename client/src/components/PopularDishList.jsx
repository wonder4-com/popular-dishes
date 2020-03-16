import React from 'react';
import PopularDishEntry from './PopularDishEntry.jsx';
import $ from 'jquery';

class PopularDishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 0,
            scrollPosition: 5
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    // onClickHandler(e) {
    //     const dishes = this.props.popularDishes;
    //     if (e.target.className === 'right') {
    //         this.setState({ leftButton: true });
    //         if (dishes.length - 3 > this.state.currentView + 3) {
    //             console.log('on right click', this.state.currentView + 3);
    //             this.setState({ currentView: this.state.currentView + 3 });
    //         } else {
    //             this.setState({ rightButton: false });
    //             this.setState({ currentView: dishes.length - 3 });
    //             console.log('on right click', dishes.length - 3);
    //         }

    //     } else {

    //         if (this.state.currentView - 3 > 3) {
    //             console.log('on left click', this.state.currentView - 3);
    //             this.setState({ currentView: this.state.currentView - 3 });
    //             this.setState({ rightButton: true });
    //         } else {
    //             this.setState({ currentView: 0 })
    //             console.log('on left click', 0);
    //             this.setState({ rightButton: true });
    //             this.setState({ leftButton: false });
    //         }
    //     }
    // }

    onClickHandler(e) {
        if (e.target.id === 'goRight') {
            $('.slider').animate({ scrollLeft: "+=630" }, 100);
        } else {
            $('.slider').animate({ scrollLeft: "-=630" }, 100);
        }
    }

    onChangeHandler(e) {
        this.setState({ scrollPosition: $('.slider').scrollLeft() })
    }


    render() {
        if (this.state.scrollPosition < 20) {
            return (
                <div>
                    <div className="slider" onScroll={this.onChangeHandler} >
                        {this.props.popularDishes.map((popularDish, index) => (
                            <div className="slide" id={index}>
                                <PopularDishEntry item={popularDish.item} photos={popularDish.photos} />
                            </div>
                        ))}
                        <button id="goRight" onClick={this.onClickHandler}> </button>
                    </div>

                </div>
            )

        } else if (this.state.scrollPosition > 1100) {
            return (
                <div>
                    <div className="slider" onScroll={this.onChangeHandler} >
                        {this.props.popularDishes.map((popularDish, index) => (
                            <div className="slide" id={index}>
                                <PopularDishEntry item={popularDish.item} photos={popularDish.photos} />
                            </div>
                        ))}
                        <button id="goLeft" onClick={this.onClickHandler}>  </button>
                    </div>

                </div>
            )
        } else {
            return (
                <div>
                    <div className="slider" onScroll={this.onChangeHandler} >
                        {this.props.popularDishes.map((popularDish, index) => (
                            <div className="slide" id={index}>
                                <PopularDishEntry item={popularDish.item} photos={popularDish.photos} />
                            </div>
                        ))}
                        <button id="goLeft" onClick={this.onClickHandler}>  </button>
                        <button id="goRight" onClick={this.onClickHandler}> </button>
                    </div>

                </div>
            )
        }
    }
}

export default PopularDishList;


