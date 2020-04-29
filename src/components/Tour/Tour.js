import React, { Component } from 'react';
import { FaWindowClose, FaCaretSquareDown } from 'react-icons/fa';

import './Tour.scss';

class Tour extends Component {

  state = {
    showInfo: false,
    hidden: false
  }

  handleInfo = () => {
    this.setState( {
      showInfo: !this.state.showInfo
    })
  }

  handleHidden = () => {
    this.setState( {
      hidden: true
    })
  }

  render(props) {
    if (this.state.hidden) {
      return (
        <div/>
      );
    }
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src={this.props.tour.img}
            alt=""
          />
          <span onClick={this.handleHidden} className="close-btn">
            <FaWindowClose />
          </span>
        </div>
        <div className="tour-info">
          <h3>{this.props.tour.city}</h3>
          <h4>{this.props.tour.name}</h4>
          <h5>
            <span>info{""}</span>
            <span className="caretdown" onClick={this.handleInfo}><FaCaretSquareDown/></span>
          </h5>
          <p>{this.state.showInfo && this.props.tour.info}</p>
        </div>
      </article>
    );
  }
}

export default Tour;