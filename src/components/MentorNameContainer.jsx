import React from 'react'
import './MentorNameContainer.css'

const MentorNameContainer = ({name}) => {
  return (
    <div className="mentor-name-container">
      {name}
    </div>
  )
}

export default MentorNameContainer