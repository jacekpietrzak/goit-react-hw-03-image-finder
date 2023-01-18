import css from './Button.module.css';

const Button = ({ buttonText, handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.Button}>
      {buttonText}
    </button>
  );
};

export default Button;
