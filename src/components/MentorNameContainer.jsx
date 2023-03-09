import React from 'react'
import './MentorNameContainer.css'

const MentorNameContainer = ({name}) => {

  return (
      <div className="mentor-name-container">
        <div className="mentor-name">{name}</div>
      </div>
  )
}

export default MentorNameContainer