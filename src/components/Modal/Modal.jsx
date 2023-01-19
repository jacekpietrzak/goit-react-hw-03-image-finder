import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyPress);
  }

  onKeyPress = event => {
    if (event.keyCode === 27) {
      this.handleCloseModal();
    }
  };

  onModalOverlayClick = event => {
    if (event.target.id === 'overlay') {
      this.handleCloseModal();
    }
  };

  handleCloseModal = () => {
    this.props.onModalClose();
    document.removeEventListener('keydown', this.onKeyPress);
  };

  render() {
    const { imgAlt, imgLargeSrc } = this.props;

    return (
      <div
        id="overlay"
        onClick={this.onModalOverlayClick}
        className={css.Overlay}
      >
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
};

export default Modal;
