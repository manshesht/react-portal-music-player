import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageOne extends Component {
  render() {
    return (
      <div className="pages one">
        <h1>
          <Link to={"/pg2"}>Use buttons to play/pause. Click here to go to Page 2. Portal will keep music playing/paused.</Link>
        </h1>
      </div>
    );
  }
}

export default PageOne;
