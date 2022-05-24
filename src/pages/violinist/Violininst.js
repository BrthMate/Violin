import "./violinist.css";
import cardData from '../../components/card/cardData';
import {useParams} from "react-router-dom";
import React,{ useEffect, useRef }  from 'react'
import './../home/home.css';
import Card from './../../components/card/Card';
import Form from '../../components/form/Form';
import Price from "../../components/price/Price";
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Violininst = () => {

  let { id } = useParams();
  
      const meSection = useRef();
      const serviceSection = useRef();
      const valuesSection = useRef();
      const instuctorSection = useRef();
      const contactSection = useRef();
    
      const h = gsap.utils.selector(meSection);
      const a = gsap.utils.selector(serviceSection);
      const v = gsap.utils.selector(valuesSection);
      const i = gsap.utils.selector(instuctorSection);
      const c = gsap.utils.selector(contactSection);
      
      gsap.registerPlugin(ScrollTrigger);
    
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
          opacity: 1,
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
            trigger: "#our-values",
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
            trigger: "#instuctor",
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
                <Price/>   
                <Price/> 
                <Price/> 
                <Price/>         
              </div>
            </div>
          </section>
          <section ref={valuesSection} id="our-values">
          <div className="container">
              <div className="row">
                <div className='about-text-container'>
                  <div className='title'>
                    Our Values
                  </div>
                  <div className='text'>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section ref={instuctorSection} id="instuctor">
          <div className="container">
            <div className="row">
              <div className='about-text-container'>
                <div className='title'>
                  Instuctor
                </div>
                <div className='text'>
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                </div>
              </div>
            </div>
            <div className='row'>
              <Card />           
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