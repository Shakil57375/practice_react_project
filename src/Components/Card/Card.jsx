import React from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props.card)
    const {idMeal,strTags,strArea,strMealThumb} = props.card
    return (
        <div className='food-card'>
            <div>
                <img src= {strMealThumb} alt="" />
                <div className='card-info'>
                    <p>Id : {idMeal}</p>
                    <h4>Name : {strTags}</h4>
                    <p>Area : {strArea}</p>
                </div>
            </div>
            <button className='btn-cart'>Add to Chart</button>
        </div>
    );
};

export default Card;