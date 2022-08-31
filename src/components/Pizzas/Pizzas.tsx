import { useEffect } from 'react';
import useApi from '../../hooks/useApi';
import './Pizzas.scss';

const Pizzas = () => {
const {request} = useApi();

    useEffect(() => {
       request('http://localhost:3001/pizzas')
       .then((res) => console.log(res)) /* http://localhost:3001/pizzas */
    }, [])

    interface Buttons {
        id: number;
        name: string
    }

    const buttonsData:Buttons[] = [
        {id: 1, name: "Все"},
        {id: 2, name: "Мясные"},
        {id: 3, name: "Вегетарианская"},
        {id: 4, name: "Гриль"},
        {id: 5, name: "Острые"},
        {id: 6, name: "Закрытые"},
    ]

    const buttons = buttonsData.map(({name, id}) => {
        return <button key={id} className='pizzas__btns_item'>{name}</button>
    })

    return <div className="pizzas"> {/* need to work on active classname styles  */}
        <div className="pizzas__btns">
            {buttons}
        </div>

        <h2 className='pizzas__title'>Все пиццы</h2>

        <div className="pizzas__items">

        </div>
    </div>
}

export default Pizzas;