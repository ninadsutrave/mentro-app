import React from 'react'
import './MentorInfo.css'

const MentorInfo = ({activeMentor}) => {
  return (
    <div className="mentor-info">
        <h1 className="mentor-name-header"> 
            {activeMentor.name}
        </h1>
        <h2 className="mentor-experience">
            {activeMentor.experience}
        </h2>
        <p className="mentor-description">
            {activeMentor.description}
        </p>
    </div>
  )
}

export default MentorInfo