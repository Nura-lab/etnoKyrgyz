import React,{useState} from 'react';
import css from './menu.module.css';
import logo1 from './../img/logo1.png';
import { Link } from 'react-router-dom';
import item1 from "../img/item1.png";
import BCM from './../img/BCMENU.png';
import Traditional from '../Tradional/Tradional';
import Footer from "../Footer/Footer";
import Public from "../PopularItems/Publick/public"
import SimpleImageSlider from "react-simple-image-slider";


const Menu =() =>{
  const [imageNum, setImageNum] = useState(1);
  // слайдер
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
    }
  ]

    return(
        <div className={css.MenuPage}>
            <div className={css.container}>
                <nav className={css.nav}>
                    <div>
                        <img className={css.logo} src={logo1}/>
                    </div>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/Menu">Меню</Link></li>
                      <li><Link to="/Public">Улуттук  тамактар</Link></li>
                      <li><Link to ="/Биз жонундо">Биз жонундо</Link></li>
                      <button className={css.login}><Link to="/Login">Кируу</Link></button>
                      <button className={css.sign}><Link to="/SignUp">Катталуу</Link></button>
                    </ul>
                </nav>
                <div className={css.blockOne}>
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
                  {/* <img  src={BCM}/>  */}
                </div>
                <div className={css.blockTwo}>
                  {
                    data.map((el, id)=> {
                      return <Traditional data={el} key={id}/>
                    })
                  }      
                </div>
                <Footer/>
            </div>
        </div>
    )
}
export default Menu;
