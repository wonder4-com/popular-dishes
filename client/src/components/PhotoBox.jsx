import React from 'react';
import SmallDescription from './smallDescription.jsx';

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
        if (e.target.className.includes('button right')) {
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
                <div className="photoBox">
                    <div className="cropper">
                        <img src={this.state.photos[this.state.currentPhoto].url} className="photo"></img>
                    </div>
                </div>
                <button onClick={this.onClickHandler} className="leftPhoto"></button>
                <button onClick={this.onClickHandler} className="rightPhoto button right"></button>
                <div className="photoCaption">
                    <div>{this.state.photos[this.state.currentPhoto].caption} </div>
                </div>
                <div id="photoCount">{this.state.currentPhoto + 1} of {this.state.photos.length}</div>
            </div>
        )
    }

}


export default PhotoBox;