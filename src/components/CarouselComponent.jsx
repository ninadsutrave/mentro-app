import React from 'react'
import carouselData from '../MentorData'
import './CarouselComponent.css'

const CarouselComponent = ({carousel, setCarousel}) => {

    const rotateRight = () => {
        setCarousel({
            carouselOrietation: carousel.carouselOrietation + 36,
            elementOrientation: carousel.elementOrientation - 36,
            focusElement: (carousel.focusElement<9)?carousel.focusElement + 1:0
        })
    }

    const rotateLeft = () => {
        setCarousel({
            carouselOrietation: carousel.carouselOrietation - 36,
            elementOrientation: carousel.elementOrientation + 36,
            focusElement: (carousel.focusElement>0)?carousel.focusElement - 1:9
        })
    }

  return (
      <div className="carousel-wrapper">
        <div className="carousel-border">
          <div
            className="carousel"
            style={{ transform: `rotate(${carousel.carouselOrietation}deg)` }}
          >
            {carouselData.map((item, index) => (
              <div
                className="carousel-element"
                key={index}
                style={{ transform: `rotate(${carousel.elementOrientation}deg)`, backgroundImage: `url(${item.image})`}}
              > 
              <img src={item.image}/>
                </div>
            ))}
          </div>
        </div>
        <div className="navigators">
          <button className="navigation-button" onClick={rotateLeft}>↓</button>
          <button className="navigation-button" onClick={rotateRight}>↓</button>
        </div>
      </div>
  )
}

export default CarouselComponent