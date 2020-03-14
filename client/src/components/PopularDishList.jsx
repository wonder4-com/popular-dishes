import React from 'react';
import PopularDishEntry from './PopularDishEntry.jsx';

class PopularDishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 0,
            leftButton: false,
            rightButton: true
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        const dishes = this.props.popularDishes;
        if (e.target.className === 'right') {
            this.setState({ leftButton: true });
            if (dishes.length - 3 > this.state.currentView + 3) {
                console.log('on right click', this.state.currentView + 3);
                this.setState({ currentView: this.state.currentView + 3 });
            } else {
                this.setState({ rightButton: false });
                this.setState({ currentView: dishes.length - 3 });
                console.log('on right click', dishes.length - 3 );
            }
            
        } else {
            
            if (this.state.currentView - 3 > 3) {
                console.log('on left click', this.state.currentView - 3);
                this.setState({currentView: this.state.currentView - 3});
                this.setState({rightButton: true});
            } else {
                this.setState({currentView: 0})
                console.log('on left click', 0);
                this.setState({ rightButton: true });
                this.setState({ leftButton: false });
            }
        }
    }


    render() {
        if (this.props.popularDishes.length > 3) {
            return (
                <div className="wrapper">
                    {(this.state.leftButton) ? <button onClick={this.onClickHandler} className="left"> left </button> : null }
                    {this.props.popularDishes.slice(this.state.currentView, this.state.currentView + 3).map((popularDish) => (
                        <div className="slide">
                            <PopularDishEntry item={popularDish.item} photos={popularDish.photos} />
                        </div>
                    ))}
                    {(this.state.rightButton) ? <button onClick={this.onClickHandler} className="right"> right </button> : null}
                </div>
            )

        } else {
            return (
                <div>
                    {this.props.popularDishes.slice(this.state.currentView, this.state.currentView + 3).map((popularDish) => (
                        <div>
                            <PopularDishEntry item={popularDish.item} photos={popularDish.photos} />
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default PopularDishList;