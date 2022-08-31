import Header from '../Header/Header';
import Pizzas from '../Pizzas/Pizzas';
import './MainPage.scss';

const MainPage = () => {
    return (
      <div className="wrapper">
        <div className="container">
       <Header/>
       <Pizzas/>
       </div>
      </div>
    );
  }

export default MainPage;
  