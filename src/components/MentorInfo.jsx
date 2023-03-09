import React from 'react'
import './MentorInfo.css'

const MentorInfo = ({mentorInfo}) => {
  return (
    <div className="mentor-info">
        <h1 className="mentor-name"> 
            {mentorInfo.name}
        </h1>
        <h2 className="mentor-experience">
            {mentorInfo.experience}
        </h2>
        <p className="mentor-experience">
            {mentorInfo.experience}
        </p>
    </div>
  )
}

export default MentorInfo