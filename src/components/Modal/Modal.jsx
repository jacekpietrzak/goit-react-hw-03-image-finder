import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { showModal, onModalOverlayClick, imgAlt, imgLargeSrc } = this.props;
    if (!showModal) {
      return null;
    }
    return (
      <div id="overlay" onClick={onModalOverlayClick} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={imgLargeSrc} alt={imgAlt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  imgLargeSrc: PropTypes.string.isRequired,
  onModalOverlayClick: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default Modal;
