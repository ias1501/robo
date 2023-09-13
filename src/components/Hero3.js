import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './hero3.css';

const Hero3 = () => {
  useEffect(() => {
      // Initialize GSAP and ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Set initial properties for photos
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });
  
      // Create GSAP animation
      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1
      });
  
      // Create ScrollTrigger
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        animation: animation,
        scrub: true,
        markers: true
      });
  }, []);

  return (
    <div className='bg-color-primary text-color-white'>
        <div className="spacer"></div>
        <div className="gallery">
          <div className="left">
            <div className="detailsWrapper">
              <div className="details">
                <div className="headline red" >Hii Wandersub</div>
                <div className="text" >this</div>
                <div className="text" >is</div>
                <div className="text" >New</div>
                <div className="text" >Eraaaaaaaaaa</div>
              </div>
              <div className="details">
                <div className="headline green" >Hiii WanderWater</div>
                <div className="text" >this</div>
                <div className="text" >is</div>
                <div className="text" >New</div>
                <div className="text" >Eraaaaaaaaaa</div>
              </div>
              <div className="details">
                <div className="headline blue" >Hii WanderFloat</div>
                <div className="text" >this</div>
                <div className="text" >is</div>
                <div className="text" >New</div>
                <div className="text" >Eraaaaaaaaaa</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="photos">
              <div className="photo red card">WanderSub</div>
              <div className="photo green card">WanderWater</div>
              <div className="photo blue card">WanderFloat</div>
            </div>
          </div>
        </div>
        <div className="spacer" ></div>
        <div className="spacer" ></div>
        <div className="spacer" ></div>
      </div>
  )
}

export default Hero3