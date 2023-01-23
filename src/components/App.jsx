import { Component } from 'react';
import { fetchImages } from '../Services/Api';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    topic: '',
    page: 1,
    totalHits: 500,
    perPage: 12,
    isLoading: false,
    error: null,
    showModal: false,
    imgLargeSrc: '',
    imgAlt: '',
  };

  loadImages = async () => {
    this.setState({ isLoading: true });
    try {
      const { topic, page, perPage } = this.state;

      const response = await fetchImages(topic, page, perPage);

      this.setState({
        images: response.hits,
        error: null,
        totalHits: response.totalHits,
      });
    } catch (error) {
      this.setState({ error: error });
      throw new Error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreImages = async () => {
    this.setState({ isLoading: true });
    try {
      const { topic, page, perPage } = this.state;

      const response = await fetchImages(topic, page, perPage);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...response.hits],
          error: null,
        };
      });
    } catch (error) {
      this.setState({ error: error });
      throw new Error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadImages();
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ topic: value });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadMoreImages();
    }
  }

  handleshowModal = event => {
    const imgAlt = event.target.alt;
    const imgLargeSrc = event.target.srcset;
    this.setState({
      showModal: true,
      imgAlt: imgAlt,
      imgLargeSrc: imgLargeSrc,
    });
  };

  onModalClose = () => {
    this.setState({
      showModal: false,
      imgAlt: '',
      imgLargeSrc: '',
    });
  };

  render() {
    const {
      images,
      isLoading,
      showModal,
      imgAlt,
      imgLargeSrc,
      page,
      perPage,
      totalHits,
    } = this.state;
    return (
      <div className={css.App}>
        <Searchbar
          onSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ImageGallery images={images} handleshowModal={this.handleshowModal} />
        <Loader isLoading={isLoading} />

        {images.length > 0 && page * perPage < totalHits && (
          <Button
            buttonText={isLoading ? 'Loading...' : 'Load More'}
            handleLoadMore={this.handleLoadMore}
          />
        )}
        {showModal && (
          <Modal
            imgAlt={imgAlt}
            imgLargeSrc={imgLargeSrc}
            onKeyPress={this.onKeyPress}
            onModalClose={this.onModalClose}
          />
        )}
      </div>
    );
  }
}

export default App;
