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

    setView (current) {
        this.setState({currentView: current});
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


