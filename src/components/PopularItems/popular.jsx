import React from 'react';
import css from "./popular.css";
import item1 from "../img/item1.png";
// import { Button } from '@mui/material'
// import { Input } from '@mui/material';

const PopularItems=({data}) =>{
    return(
        <span className="main_card container" >
                <img className="cards_foto" src={data.img} />
                <p className="card_name" >{data.name}</p>
                <p className="card_description" >{data.description}</p>
                <div  className="card_buttons" >
                    <button className="card_button" >{data.button}</button>
                    <p className="card_price" >{data.price}</p>
                </div>
        </span> 
    )
}

export default PopularItems;