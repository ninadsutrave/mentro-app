import React, {useState} from 'react'
import carouselData from '../data.json'

const C1 = () => {

    const [carousel, setCarousel] = useState({
        carouselOrietation: 0,
        elementOrientation: 0,
        focusElement: 0,
        prevElement: 12,
        nextElement: 1
    })

    const rotateRight = () => {

    }

    const rotateLeft = () => {
        
    }

  return (
    <div className="carousel">

    </div>
  )
}

export default C1