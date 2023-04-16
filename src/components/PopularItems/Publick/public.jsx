import React from 'react';
import css from "./public.css";
import PopularItems from "./../popular"
import item1 from "../../img/item1.png";
import Footer from "../../Footer/Footer";
import footerlogo from "../../img/footerlogo.png";
import user from "../../img/user.png";
import search from "../../img/search.png";
import kgzdaam from "../../img/kgzdam.png";
import dollar from "../../img/dollar.png";
import { Button } from '@mui/material'; 

const Public = () =>{

    const data = [
        {
            id: 1,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 2,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 3,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 4,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 5,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 6,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 7,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 8,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 9,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 10,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 11,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 12,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 13,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 14,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 15,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 16,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 17,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        },
        {
            id: 18,
            img: item1,
            name: "Беш бармак",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            price: 12,
            button: "+ Add order"
        }   
    ]

    return(
        <div className="container public">
            <div className="nav">
                <div className="nav_logo">
                    <img className="nav_foto" src={footerlogo} />
                </div>
                <div className="nav_search">
                    <div><p className="nav_title" >Таманыныздар Даамдуу болсун!</p></div>
                    
                    <div className='nav_icons'>
                        <img class="search_foto" src={search}/>
                        <img class="search_foto" src={search}/>
                        <img class="search_foto" src={search}/>
                    </div>
                </div>
                <div className="user">
                    <img className='user_foto' src={user} alt="" srcset="" />
                    <div>
                        <h3>Nursultan</h3>
                        <p>Pro Acount</p>
                    </div>
                </div>
            </div>
            <div className="publick_items">
                <div className="popularitems" >
                    <div className="popularitems_title" >
                        <h3>Populr items</h3>
                        <h3>ВФЫВФЫВ</h3>
                        <h3>ВФЫВФЫВ</h3>
                        <h3>ВФЫВФЫВ</h3>
                        <h3>ВФЫВФЫВ</h3>
                        <h3>ВФЫВФЫВ</h3>
                        <h3>ВФЫВФЫВ</h3>
                        <h3>ВФЫВФЫВ</h3>
                        
                    </div> 
                
                    <div className="blue">
                        <h1>23%</h1>
                        <img className='kgzdaam' src={kgzdaam} />
                    </div>
                    <Button href="/" variant='contained'>Артка</Button>
                    
                </div>
                
                <div className="cards" >
                    <div className="nursultan" >
                        <div className="star" ></div>
                        <div className="shopping_details" >
                            <p>Shoping detals</p>
                            <div className="prices">
                                <img className='dollar' src={dollar} alt="" srcset="" />
                                <p>144500  com</p>
                            </div>
                            <div className="prices">
                                <img className='dollar' src={dollar} alt="" srcset="" />
                                <p>144500  com</p>
                            </div><div className="prices">
                                <img className='dollar' src={dollar} alt="" srcset="" />
                                <p>144500  com</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockThree">
                        {
                            data.map((el, id)=> {
                                return <PopularItems data={el} key={id}/>
                            })
                        }      
                    </div>
                    
                </div>
                
            </div>
            
            <Footer/>
        </div>
        
    )
}

export default Public;