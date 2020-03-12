import React from 'react';
import PhotoEntry from './PhotoEntry.jsx';

class PhotoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: this.props.photos,
            currentPhoto: 0
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        if (e.target.className === 'button right') {
            if (this.state.currentPhoto === this.state.photos.length - 1) {
                this.setState({ currentPhoto: 0 });
            } else {
                this.setState({ currentPhoto: this.state.currentPhoto + 1});
            }
        } else {
            if (this.state.currentPhoto === 0) {
                this.setState({ currentPhoto: this.state.photos.length - 1});
            } else {
                this.setState({ currentPhoto: this.state.currentPhoto - 1});
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler} className="button left">left</button>
                <PhotoEntry photo={this.state.photos[this.state.currentPhoto]} />
                <button onClick={this.onClickHandler} className="button right">right</button>
                <div className="photo-number">{this.state.currentPhoto + 1} of {this.state.photos.length}</div>
            </div>
        )
    }

}


export default PhotoBox;