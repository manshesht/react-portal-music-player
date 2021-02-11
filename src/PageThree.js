import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageThree extends Component {
  render() {
    return (
      <div className="pages three">
        <h1>
            <Link to={"/"}>Use buttons to play/pause. Click here to go to Page 1. Portal will keep music playing/paused.</Link>
        </h1>
      </div>
    );
  }
}

export default PageThree;
