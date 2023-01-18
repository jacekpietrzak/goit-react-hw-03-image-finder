import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imgSrc, imgLargeSrc, imgAlt, handleshowModal }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={handleshowModal}
        className={css.ImageGalleryItemImage}
        src={imgSrc}
        srcSet={imgLargeSrc}
        alt={imgAlt}
      />
    </li>
  );
};

export default ImageGalleryItem;
