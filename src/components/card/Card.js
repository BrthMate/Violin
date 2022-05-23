import React,{useState} from 'react';
import "./card.css";
import cardData from './cardData';
import 'boxicons';
import { Link } from "react-router-dom";


const Card = () => {
    
    const [current, setCurrent] = useState(0)
    const length = cardData.length

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1);
    }


    return ( 
        <section className='slider'>
            <button className='btn right'onClick={nextSlide}><box-icon name='right-arrow-alt'></box-icon></button>
            <button className='btn left' onClick={prevSlide}><box-icon name='left-arrow-alt'></box-icon></button>
            {cardData.map((slide,index) =>{
            return(
                <>
                    <img className={index === current ? "active slider-img" : "slider-img"} key={index} src={slide.img} alt="img"></img>
                    <div className={index === current ? "active teacher-box" : "teacher-box"}>
                        <div className= "name">{slide.name}</div>
                        <div className="text">{slide.text}</div>
                        <button className="btn-t"><Link className= "links" to={"/" + index}>Show</Link></button>
                    </div>
                </>    
                ) 
            })}
            
        </section>
    )
}

export default Card