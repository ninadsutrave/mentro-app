import React from 'react'
import carouselData from '../MentorData'
import './CarouselComponent.css'

const CarouselComponent = ({carousel, setCarousel}) => {

  const navigatorColor = (carousel.focusElement % 2)?'var(--green1)':'var(--green2)'
  const borderColor = (carousel.focusElement % 2)?'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'800\' ry=\'800\' stroke=\'%234CAF50FF\' stroke-width=\'4\' stroke-dasharray=\'6%2c 24\' stroke-dashoffset=\'0\' stroke-linecap=\'square\'/%3e%3c/svg%3e")':'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'800\' ry=\'800\' stroke=\'%230C3959FF\' stroke-width=\'4\' stroke-dasharray=\'6%2c 24\' stroke-dashoffset=\'0\' stroke-linecap=\'square\'/%3e%3c/svg%3e")'

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
        <div className="carousel-border" style={{backgroundImage: borderColor}}>
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
                <img className="mentor-img" src={item.image}/>
              </div>
            ))}
          </div>
        </div>
        <div className="navigators">
          <button className="navigation-button" onClick={rotateLeft} style={{backgroundColor: navigatorColor}}>↓</button>
          <button className="navigation-button" onClick={rotateRight} style={{backgroundColor: navigatorColor}}>↓</button>
        </div>
      </div>
  )
}

export default CarouselComponent