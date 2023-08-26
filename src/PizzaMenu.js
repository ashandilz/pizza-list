import React from 'react'


const PizzaMenu = ({pizzaData}) => {
  const pizzas = pizzaData;
  return (
    <main className='mainPizza'>
        <ul className="pizzas">
            {pizzas.map((pizza) => (
              <li className='list'>
                <table>
                  <tr>
                    <td>
                    <img className={pizza.soldOut ? 'pizzaImages sold-out' : 'pizzaImages'} src={pizza.photoName} alt={pizza.name}/>
                    </td>
                    <td>
                    <div className={pizza.soldOut ? 'pizzaDescription sold-out' : 'pizzaDescription'} >
                  <h3>{pizza.name}</h3>
                  <p style={{ fontStyle: 'italic' }}>{pizza.ingredients}</p>
                  {pizza.soldOut ? <p>Sold out</p>: <p>{pizza.price}</p>}
                </div>
                    </td>
                  </tr>
                </table>
              </li>
            ))}
          </ul>
    </main>
  )
}

export default PizzaMenu
