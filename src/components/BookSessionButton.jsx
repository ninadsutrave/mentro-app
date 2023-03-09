import React, { useState, useEffect } from 'react'
import './BookSessionButton.css'

const BookSessionButton = ({focusElement}) => {

  const backgroundColor = (focusElement % 2)?'var(--green1)':'var(--green2)'
  const dropShadow = (focusElement % 2)?'drop-shadow(8px 4px 20px #4CAF50)':'drop-shadow(8px 4px 20px #7ABD87)'

  return (
    <div className="book-session-btn-wrapper">
      <button className="book-session-btn" style={{background: `${backgroundColor}`, filter: `${dropShadow}`}}>
          Book a session
      </button>
    </div>
  )
}

export default BookSessionButton