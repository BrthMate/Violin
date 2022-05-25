import "./feedback.css";
import FeedbackData from './FeedbackData';
import React,{useState} from 'react';
import 'boxicons';

const Feedback = () => {
    const [current, setCurrent] = useState(0)
    const length = FeedbackData.length

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
            {FeedbackData.map((slide,index) =>{
            return(
                <>
                    <div className={index === current ? "active feedback-box" : "feedback-box"}>
                        <div className= "text"><span className="mark left-mark">"</span>{slide.text}<span className="mark right-mark">"</span></div>
                    </div>
                </>    
                ) 
            })}
            
        </section>
    )
}

export default Feedback