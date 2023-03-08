import React, {useState} from 'react'
import carouselData from '../data.json'
import './Carousel.css'

const Carousel = () => {

    const [carousel, setCarousel] = useState({
        carouselOrietation: 0,
        elementOrientation: 0,
        focusElement: 0,
        prevElement: 9,
        nextElement: 1
    })

    const rotateRight = () => {
        setCarousel({
            carouselOrietation: carousel.carouselOrietation + 36,
            elementOrientation: carousel.elementOrientation - 36,
            focusElement: carousel.prevElement,
            prevElement: (carousel.prevElement>0)?carousel.prevElement-1:11,
            nextElement: carousel.focusElement
        })
    }

    const rotateLeft = () => {
        setCarousel({
            carouselOrietation: carousel.carouselOrietation - 36,
            elementOrientation: carousel.elementOrientation + 36,
            focusElement: carousel.nextElement,
            prevElement: carousel.focusElement,
            nextElement: (carousel.nextElement<11)?carousel.nextElement+1:0
        })
    }

  return (
    <div className="carousel-wrapper">
       <button onClick={rotateRight}>↓</button>
       <button onClick={rotateLeft}>↓</button>
       <div className="test"/>
       <div
         className="carousel"
         style={{ transform: `rotate(${carousel.carouselOrietation}deg)` }}
       >
         {carouselData.map((item, index) => (
           <div
             className="carousel-element"
             key={index}
             id={index}
             style={{ transform: `rotate(${carousel.elementOrientation}deg)` }}
           />
         ))}
       </div>
     </div>
  )
}

export default Carousel