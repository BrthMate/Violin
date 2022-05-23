import React,{ useEffect, useRef }  from 'react'
import './home.css';
import Card from './../../components/card/Card';
import Form from '../../components/form/Form';
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import img1 from "./../../assert/img1.jpg";
import img2 from "./../../assert/img2.jpg";
import img3 from "./../../assert/img3.jpg";
import img4 from "./../../assert/img4.jpg";
import arrow from "./../../assert/arrow.svg";

import about1 from "./../../assert/about-us1.jpg";
import about2 from "./../../assert/about-us2.jpg";
import about3 from "./../../assert/about-us3.jpg";
import about4 from "./../../assert/about-us4.jpg";

const Home = () => {

  const homeSection = useRef();
  const aboutSection = useRef();
  const valuesSection = useRef();
  const instuctorSection = useRef();
  const contactSection = useRef();

  const h = gsap.utils.selector(homeSection);
  const a = gsap.utils.selector(aboutSection);
  const v = gsap.utils.selector(valuesSection);
  const i = gsap.utils.selector(instuctorSection);
  const c = gsap.utils.selector(contactSection);
  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {            
    const tl = gsap.timeline()
      .from(h(".container"), {
        opacity: 0,
        ease: "powe4.out"
      })
      .delay(1)
      .to(h(".container"), {
        opacity: 1,
        y: 0,
        ease: "power4.out"
      })
      .to(h(".title"), {
        opacity: 1,
        ease: "power4.out"
      })
      .to(h(".text"), {
        opacity: 1,
        ease: "power4.out"
      })
      .to(h(".text a"), {
        opacity: 1,
        ease: "power4.out"
      })
      .to(h("#home .row"), {
        opacity: 1,
        ease: "power4.out"
      })
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
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
    .from(a("img"), {
      y:"-200",
      ease: "power4.out"
    })
    .to(a("img"), {
      ease: "power4.out",
      y:"0",
    })
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-us",
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
    <div className='home-container'>
      <section ref={homeSection} id="home">
        <div className='container'>
          <div className='home-text-container'>
            <div className='title'>
              <span className='line-one'>Violin</span>
              <span className='line-two'>Lesson</span>
            </div>
            
            <div className='text'>
              <span className='join'>ext, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the </span>
              <span className='way'><a href="#contact">Contact Us <img src={arrow}></img></a></span>
            </div>
          </div>
          <div className='img-container'>
              <div className='row'>
                <img src={img1} alt="img"></img>             
              </div>
              <div className='row'>
                <img src={img2} alt="img"></img>
                <img src={img3} alt="img"></img>
              </div>
              <div className='row'>
                <img src={img4} alt="img"></img>            
              </div>
          </div>
        </div>
      </section>
      <section ref={aboutSection} id="about-us">
        <div className="container">
          <div className="row">
            <div className='about-text-container'>
              <div className='title'>
                About Us
              </div>
              <div className='text'>
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
              </div>
            </div>
          </div>
          <div className='row'>
            <img className="right" src={about1} alt="img"></img>             
          </div>
          <div className='row'>
            <img className="left" src={about2} alt="img"></img>
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
          <div className='row'>
            <img className="right" src={about3} alt="img"></img>             
          </div>
          <div className='row'>
            <img className="left" src={about4} alt="img"></img>
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
              Contact Us
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
  )
}

export default Home

