import React from 'react'
import './MentorRating.css'

import stars1 from '../assets/images/stars1.png'
import stars2 from '../assets/images/stars2.png'
import stars3 from '../assets/images/stars3.png'

const MentorRating = ({activeMentor}) => {

  var textColor = (activeMentor.id % 2)?'var(--green2)':'var(--green1)'
  var imgUrl = (activeMentor.id % 2)?stars3:stars2

  if(activeMentor.rating === 4.9) {
    imgUrl = stars1
  }

  return (
    <div className="mentor-rating-wrapper">
      <div className="mentor-rating-value-wrapper">
        <span className="mentor-rating-value" style={{color: `${textColor}`}}>{activeMentor.rating.toFixed(1)}</span>
      </div>
      <div className="mentor-rating-stars">
        <img className="rating-image" alt="rating stars" src={imgUrl} />
      </div>
    </div>
  )
}

export default MentorRating