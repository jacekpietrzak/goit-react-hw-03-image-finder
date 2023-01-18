import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  render() {
    if (!this.props.showModal) {
      return null;
    }
    return (
      <div
        id="overlay"
        onClick={this.props.onModalOverlayClick}
        className={css.Overlay}
      >
        <div className={css.Modal}>
          <img src={this.props.imgLargeSrc} alt={this.props.imgAlt} />
        </div>
      </div>
    );
  }
}

export default Modal;
