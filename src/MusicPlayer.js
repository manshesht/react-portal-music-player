import React, { Component } from 'react';
import ReactDOM from 'react-dom';


/**
 * This portal will share state with its parent, 
 * updated by the parentState prop component.
 * 
 */
class MusicPlayer extends Component {
  render() {
    return ReactDOM.createPortal(
        <div className="portal">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={this.props.playMusic}>Play</button> 
                <button onClick={this.props.pauseMusic}>Pause</button> 
            </div>
            <h1>
                {`Currently Playing: ${this.props.parentState}`}
            </h1>
        </div>,
        document.getElementById('portal')
    );
  }
}

export default MusicPlayer;
