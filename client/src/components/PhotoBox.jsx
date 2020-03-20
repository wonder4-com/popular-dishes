import React from 'react';
import SmallDescription from './smallDescription.jsx';

class PhotoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPhoto: 0
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.resetCurrent = this.resetCurrent.bind(this);
    }

    resetCurrent() {
        this.setState({ currentPhoto: 0 });
    }

    onClickHandler(e) {
        e.preventDefault();
        if (e.target.className.includes('button right')) {
            if (this.state.currentPhoto === this.props.photos.length - 1) {
                this.setState({ currentPhoto: 0 });
            } else {
                this.setState({ currentPhoto: this.state.currentPhoto + 1 });
            }
        } else {
            if (this.state.currentPhoto === 0) {
                this.setState({ currentPhoto: this.props.photos.length - 1 });
            } else {
                this.setState({ currentPhoto: this.state.currentPhoto - 1 });
            }
        }
    }

    render() {
        return (
            <div>
                {(this.props.photos.length > 0) ?
                    <div>
                        <div className="photoBox">
                            <div className="cropper">
                                <img src={this.props.photos[this.state.currentPhoto].url} className="photo"></img>
                            </div>
                        </div>
                        <button onClick={this.onClickHandler} className="leftPhoto"></button>
                        <button onClick={this.onClickHandler} className="rightPhoto button right"></button>
                        <div className="photoCaption">
                            <div>{this.props.photos[this.state.currentPhoto].caption} </div>
                        </div>
                        <div id="photoCount">{this.state.currentPhoto + 1} of {this.props.photos.length}</div>
                    </div> :
                    <div>
                        <div className="photoBox">
                            <div className="cropper">
                                <img src='https://www.yorkshirecareequipment.com/wp-content/uploads/2018/09/no-image-available.jpg' className="photo"></img>
                            </div>
                        </div>
                        <button onClick={this.onClickHandler} className="leftPhoto"></button>
                        <button onClick={this.onClickHandler} className="rightPhoto button right"></button>
                        <div className="photoCaption">
                            <div> </div>
                        </div>
                        <div id="photoCount">0 of 0</div>
                    </div>
                }
            </div>
        )

    }

}


export default PhotoBox;