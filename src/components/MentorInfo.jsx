import React from 'react'
import './MentorInfo.css'

const MentorInfo = ({activeMentor}) => {
  return (
    <div className="mentor-info">
        <div className="">
          <h1 className="mentor-name-header"> 
              {activeMentor.name}
          </h1>
          <p className="mentor-experience">
              {activeMentor.experience}
          </p>
        </div>
        <p className="mentor-description">
            {activeMentor.description}
        </p>
    </div>
  )
}

export default MentorInfo