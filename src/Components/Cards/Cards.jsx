import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css'
const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => setCards(data.meals))
    },[])
    return (
        <div className='cards-container'>
            <div>
                {
                    cards.map(card => <Card>{card}</Card>)
                }
            </div>
            <div>
                <p>cards info comming</p>
            </div>
        </div>
    );
};

export default Cards;