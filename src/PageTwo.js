import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageTwo extends Component {
  render() {
    return (
      <div className="pages two">
        <h1>
            <Link to={"/pg3"}>Use buttons to play/pause. Click here to go to Page 3. Portal will keep music playing/paused.</Link>
        </h1>
      </div>
    );
  }
}

export default PageTwo;
