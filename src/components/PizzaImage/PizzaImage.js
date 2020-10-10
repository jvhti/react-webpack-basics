import React from 'react';
import classes from './PìzzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = () => {
  return (
      <div className={classes.PizzaImage}>
        <img src={PizzaImage} alt="Pizza" className={classes.PizzaImg}/>
      </div>
  );
};

export default pizzaImage;
