import { Loading } from 'notiflix/build/notiflix-loading-aio';
import 'notiflix/dist/notiflix-aio-3.2.6.min.js';

const Loader = ({ isLoading }) => {
  return isLoading
    ? Loading.standard({
        svgColor: '#3f51b5',
      })
    : Loading.remove();
};
export default Loader;
