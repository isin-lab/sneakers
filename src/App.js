import React, { useState } from "react";
import CardsView from "./img/apps_black_24dp.svg";
import ListView from "./img/view_list_black_24dp.svg";

import './App.css';


const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];



const Button = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <div className="containerBtn">     
      <button className='btnMain' onClick={handleClick}>
          {isActive ? <img className="icon" src={CardsView} alt="Active" /> : <img className="icon" src={ListView} alt="Inactive" />}
      </button> 
      {isActive ? <CardRow /> : <CardBlock />}
    </div>
  );
};


function CardRow () {
  return (
  <div className="containerCardRow">
    {products.map((product, index) => (
    <div className="cardRow" key={index}>
      <img className="imgRow" src={product.img} alt={product.name} />
      <div className="descriptionRow">    
      <h3 className="imgRow">{product.name}</h3>
      <p className="colorRow">{product.color}</p>
      <p className="priceRow">&#36; {product.price}</p>
      <button className="btnRow" key={index}>add to card</button> 
      </div> 
    </div>
    ))}
  </div>
  );
}
function CardBlock () {
  return (
  <div className="containerCardBlock">
    {products.map((product, index) => (
    <div className="cardBlock" key={index}>
      <div className="containerName">
      <h3 className="imgBlock">{product.name}</h3>
      <p className="colorBlock">{product.color}</p>
      </div>
      <img className="imgBlock" src={product.img} alt={product.name} />
      <div className="wrpPriceBlock">
        <p className="priceBlock">&#36; {product.price}</p>
        <button className="btnBlock" key={index}>add to card</button>
      </div>  
    </div>
    ))}
  </div>
  );
}

const App = () => {
  return (
     <Button/>
  );
};


export default App;
