import React,{useEffect, BrowserRouter, useState} from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { loadFull } from "tsparticles";
import css from './Home.module.css';
import logo1 from './../img/logo1.png';
import bg from './../img/bg.png';
import cart from  './../img/cart.jpg';
import cart2 from  './../img/cart22.jpg';
import cart1 from './../img/cart2.png'; 
import cart5 from './../img/cart5.png';  
import cart3 from './../img/cart4.png';  
import cart4 from  './../img/cart6.png';
import Footer from "../Footer/Footer";
import UserProfile from '../UserProfile/index';
import { Link } from 'react-router-dom';
import AOS from 'aos'
import { useDispatch,useSelector } from "react-redux";
import 'aos/dist/aos.css'
import { Button } from '@mui/material';
import ActionAreaCard from '../ActionAreaCard';




 const Home = () => {
 
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: "https://img.freepik.com/free-photo/arrangement-of-thanksgiving-day-delicious-dinner_23-2149100153.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais",
      },
      {
         url: "https://img.freepik.com/premium-photo/ready-made-dumplings-with-potatoes-and-mushrooms-in-a-plate-on-a-wooden-table_655426-329.jpg?size=626&ext=jpg",
      },
      {
         url: "https://img.freepik.com/free-photo/healthy-tasty-vegetables-grilled-on-pan_1220-4453.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=sph"
      },
      {
         url: "https://img.freepik.com/free-photo/top-view-table-full-of-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg",
      },
      {
         url: "https://img.freepik.com/free-photo/top-view-of-rice-with-carrot-cooked-with-lamb-served-with-yogurt-and-salad_141793-2449.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais",
      },
      {
         url: "https://img.freepik.com/free-photo/above-view-tasty-food-assortment_23-2148941528.jpg?w=740&t=st=1680949512~exp=1680950112~hmac=9d859636a9cfbc78ac9c2dcaac95e2eeb80159d24013c268624bfc0414ff835f",
      },
      {
         url: "https://img.freepik.com/free-photo/arrangement-with-delicious-food-above-view_23-2148941556.jpg?w=740&t=st=1680949434~exp=1680950034~hmac=c45c925fea81a88ea79edbe05113bceb788572bde86d405881f5f6e7c041af97",
      },
   ];
   const [data, setData] = useState(null);
    useEffect(() =>{
      AOS.init({duration:2000});

      fetch('https://127.0.0.1:8000/api', {
        method: 'POST',
      }).then(async response => {
        console.log(await response.json());
      });
    }, []);

    return (
      <div className={css.HomePage} >
         {/* <Particles id="particles-here" init={anInitFunction} options={}/> */}
        
         <div className={css.container}>
            <nav className={css.nav} data-aos="fade-down">
              <div>
                  <img className={css.logo} src={logo1}/>
              </div>
              <ul >
                   <li ><a><Link   to="/">Home</Link></a></li>
                       <li><Link to="/Menu">Меню</Link></li>
                     <li><Link to="/public">Улуттук тамактар</Link></li>
                     <li><Link to ="/Биз жонундо">Биз жонундо</Link></li>
                     <button className={css.login}><Link to="/Login">Кируу</Link></button>
                     <button className={css.sign}><Link to="/Sign">Катталуу</Link></button>
                   </ul>
            </nav>
        
            <div className={css.blockOne} data-aos="flip-right" >
               <SimpleImageSlider
                  width={1170}
                  height={ 500}
                  images={sliderImages}
                  showBullets={true}
                  showNavs={true}
                  autoPlay={true} 
                  onStartSlide = {(index, length) => {
                     setImageNum(index);
                  }}
                     autoPlayDelay = {3}
               />
            </div>
            <div className={css.blockTwo }>
            
               <div className={css.blockContent} >
                  <h2 data-aos="zoom-in">Нукура Кыргыз Даамы</h2>
                  <br/>
                  <p data-aos="zoom-in">
                     Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce ac ipsum suscipit, commodo orci et,
                     porta ex. Pellentesque tempus nulla eu erat pulvinar, vitae varius massa convallis. Mauris vestibulum
                     sapien vitae orci ullamcorper dapibus. Integer quis enim urna. Fusce egestas felis metus, nec tincidunt
                     elit finibus ac. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia 
                     nostra,per inceptos himenaeos. Nam eleifend, lectus sed porttitor ullamcorper, massa risus ultricies
                     magna, in molestie ex nibh non elit. Donec fermentum erat lorem, sed gravida tellus rutrum quis.
                  </p>
                  <p data-aos="zoom-in">
                     Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce ac ipsum suscipit, commodo orci et,
                     porta ex. Pellentesque tempus nulla eu erat pulvinar, vitae varius massa convallis. Mauris vestibulum
                     sapien vitae orci ullamcorper dapibus. Integer quis enim urna. Fusce egestas felis metus, nec tincidunt
                     elit finibus ac. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia 
                     nostra,per inceptos himenaeos. Nam eleifend, lectus sed porttitor ullamcorper, massa risus ultricies
                     magna, in molestie ex nibh non elit. Donec fermentum erat lorem, sed gravida tellus rutrum quis.
                  </p>
               </div>
            </div>
            <div className={css.blockThree} data-aos="flip-right">
           
               <img src={cart} data-aos="flip-right"/>
               <img src={cart1} data-aos="flip-right"/>
               <img src={cart2} data-aos="flip-right"/>
               <img src={cart5} data-aos="flip-right"/>
               <img src={cart3} data-aos="flip-right"/>
               <img src={cart4} data-aos="flip-right"/>
            </div>  
            <Button href="/ActionAreaCard" variant='contained'>кошумча маалымат</Button>
            <div className={css.blockFour} >
               <div className={css.video }  data-aos="zoom-in">
               <iframe  src="https://www.youtube.com/embed/CZfDkslNElA" title="III Всемирные игры кочевников - III World nomad games - PROMO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
               <p data-aos="zoom-in">Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce ac ipsum suscipit, commodo orci et, porta ex. Pellentesque tempus nulla eu erat pulvinar, vitae varius massa convallis. Mauris vestibulum sapien vitae orci ullamcorper dapibus. Integer quis enim urna. Fusce egestas felis metus, nec tincidunt elit finibus ac. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eleifend, lectus sed porttitor ullamcorper, massa risus ultricies magna, in molestie ex nibh non elit. Donec fermentum erat lorem, sed gravida tellus rutrum quis.</p>
            </div>
            <Button href="/" variant='contained'>кошумча маалымат</Button>
            <Footer/>
         </div>
      </div>

    )

 }
 export default Home;