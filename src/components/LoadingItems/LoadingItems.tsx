import preloader from '../../assets/imgs/preloader.gif'
import "./LoadingItems.scss";

const LoadingItems = () => {
  return (
   <div className='preloader'>
    <img src={preloader}/>
   </div>
  );
};

export default LoadingItems;
