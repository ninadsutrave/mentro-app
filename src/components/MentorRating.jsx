import React from 'react'
import './MentorRating.css'

import stars1 from '../assets/images/stars1.png'
import stars2 from '../assets/images/stars1.png'
import stars3 from '../assets/images/stars1.png'

import mentorData from '../MentorData'

const MentorRating = ({carousel}) => {
  return (
    <div className="mentor-rating-wrapper">
      <div className="mentor-rating-value">
      
      </div>
      <div className="mentor-rating-stars">
        <img className="rating-image" alt="rating stars" src={stars1} />
      </div>
    </div>
  )
}

export default MentorRating