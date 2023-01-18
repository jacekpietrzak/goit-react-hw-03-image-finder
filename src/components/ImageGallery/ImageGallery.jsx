import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, handleshowModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images &&
        images.map(image => {
          return (
            <ImageGalleryItem
              imgSrc={image.webformatURL}
              imgLargeSrc={image.largeImageURL}
              imgAlt={image.tags}
              key={image.id}
              handleshowModal={handleshowModal}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
