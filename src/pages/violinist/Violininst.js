import "./violinist.css";
import cardData from '../../components/card/cardData';
import {useParams} from "react-router-dom";
import React,{ useEffect, useRef }  from 'react'
import './../home/home.css';
import Feedback from "../../components/feedback/Feedback";
import Form from '../../components/form/Form';
import Price from "../../components/price/Price";
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Violininst = () => {

  let { id } = useParams();
  
      const meSection = useRef();
      const serviceSection = useRef();
      const aboutmeSection = useRef();
      const feedbackSection = useRef();
      const contactSection = useRef();
    
      const h = gsap.utils.selector(meSection);
      const a = gsap.utils.selector(serviceSection);
      const v = gsap.utils.selector(aboutmeSection);
      const i = gsap.utils.selector(feedbackSection);
      const c = gsap.utils.selector(contactSection);
      
      gsap.registerPlugin(ScrollTrigger);
    
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
      useEffect(() => {            
        const tl = gsap.timeline()
          .from(h(".container"), {
            opacity: 0,
            ease: "power4.out"
          })
          .delay(1)
          .to(h(".container"), {
            opacity: 1,
            y: 0,
            ease: "power4.out"
          })
          .to(h(".me-details"), {
            opacity: 1,
            ease: "power4.out"
          })
          .to(h(".name"), {
            opacity: 1,
            ease: "power4.out"
          })
          .to(h(".text"), {
            opacity: 1,
            ease: "power4.out"
          })
          .to(h("#me .row"), {
            opacity: 1,
            ease: "power4.out"
          })
        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: "#me",
            start: "center",
            scrub: true,
            //markers: true
          }
        })
        .from(a(".container"), {
          opacity: 0,
          ease: "powe4.out"
        })
        .to(a(".container"), {
          opacity: 1,
          y:"0",
          ease: "power4.out"
        })
        .from(a(".about-text-container"), {
          y:"-200",
          ease: "power4.out"
        })
        .to(a(".about-text-container"), {
          ease: "power4.out",
          y:"0",
        })
        .from(a(".row"), {
          y:"-200",
          ease: "power4.out"
        })
        .to(a(".row"), {
          ease: "power4.out",
          y:"0",
        })
        const t3 = gsap.timeline({
          scrollTrigger: {
            trigger: "#service",
            start: "center",
            scrub: true,
            //markers: true
          }
        })
        .from(v(".container"), {
          opacity: 0,
          ease: "powe4.out"
        })
        .to(v(".container"), {
          opacity: 1,
          y:"0",
          ease: "power4.out"
        })
        .from(v(".about-text-container"), {
          y:"-200",
          ease: "power4.out"
        })
        .to(v(".about-text-container"), {
          ease: "power4.out",
          y:"0",
        })
        .from(v("img"), {
          y:"-200",
          ease: "power4.out"
        })
        .to(v("img"), {
          ease: "power4.out",
          y:"0",
        })
        const t4 = gsap.timeline({
          scrollTrigger: {
            trigger: "#about-mes",
            start: "center",
            scrub: true,
            //markers: true
          }
        })
        .from(i(".container"), {
          opacity: 0,
          ease: "powe4.out"
        })
        .to(i(".container"), {
          opacity: 1,
          y:"0",
          ease: "power4.out"
        })
        .from(i(".about-text-container"), {
          y:"-200",
          ease: "power4.out"
        })
        .to(i(".about-text-container"), {
          ease: "power4.out",
          y:"0",
        })
        .from(i(".row"), {
          y:"-200",
          ease: "power4.out"
        })
        .to(i(".row"), {
          ease: "power4.out",
          y:"0",
        })
        const t5 = gsap.timeline({
          scrollTrigger: {
            trigger: "#feedback",
            start: "center",
            scrub: true,
            //markers: true
          }
        })
        .from(c(".container"), {
          opacity: 0,
          ease: "powe4.out"
        })
        .to(c(".container"), {
          opacity: 1,
          y:"0",
          ease: "power4.out"
        })
        .from(c(".about-text-container"), {
          y:"-200",
          ease: "power4.out"
        })
        .to(c(".about-text-container"), {
          ease: "power4.out",
          y:"0",
        })
        .from(c(".row"), {
          y:"-200",
          ease: "power4.out"
        })
        .to(c(".row"), {
          ease: "power4.out",
          y:"0",
        })
      }, []);
    

  return (
    <>
      <div className='me-container'>
        {cardData.map((slide,index) =>{
          if(index == id){
            return(
              <section ref={meSection} id="me">
                <div className='container'>
                  <div className='me-text-container'>
                    <img className="me-img" src={slide.img}></img>
                    <div className="me-details">
                      <div className="name">{slide.name}</div>
                      <div className='about-text-container'>
                        <div className='title'>
                          Contact
                        </div>
                        <div className='text'>
                          <ul>
                            <li>{slide.phonenumber}</li>
                            <li>{slide.email}</li>
                          </ul>
                        </div>
                      </div>
                      <div className='about-text-container'>
                        <div className='title'>
                          About Me
                        </div>
                        <div className='text'>
                          {slide.text}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> 
            ) 
          }
        })}
          
          <section ref={serviceSection} id="service">
            <div className="container">
              <div className="row">
                <div className='about-text-container'>
                  <div className='title'>
                    Services
                  </div>
                  <div className='text'>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                  </div>
                </div>
              </div>
              <div className='row'>
                <Price type="Express" desc="4 lessos of 45min"  price = "150$"/>   
                <Price type="Express" desc="4 lessos of 45min"  price = "250$"/> 
                <Price type="Express" desc="4 lessos of 45min"  price = "80$"/> 
                <Price type="Express" desc="4 lessos of 45min"  price = "free"/>     
              </div>
            </div>
          </section>
          <section ref={aboutmeSection} id="about-mes">
          <div className="container">
              <div className="row">
                <div className='about-text-container'>
                  <div className='title'>
                    About Me
                  </div>
                  <div className='text'>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section ref={feedbackSection} id="feedback">
          <div className="container">
            <div className="row">
              <div className='about-text-container'>
                <div className='title'>
                  Feedback
                </div>
                <div className='text'>
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                </div>
              </div>
            </div>
            <div className='row'>
              <Feedback />           
            </div>
          </div>
          </section>
          <section ref={contactSection} id="contact">
          <div className="container">
            <div className="row">
              <div className='about-text-container'>
                <div className='title'>
                  Contact Me
                </div>
                <div className='text'>
                  web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                </div>
              </div>
            </div>
            <div className='row'>
                <Form/>
            </div>
          </div>
          </section>
        </div>
    </> 
        
      )
}

export default Violininst