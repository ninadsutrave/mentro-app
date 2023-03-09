import { useState, useEffect } from 'react'
import './MentorsPage.css'

//importing components
import CarouselComponent from './components/CarouselComponent'
import MentorNameContainer from './components/MentorNameContainer'
import BookSessionButton from './components/BookSessionButton'
import mentorData from './MentorData'

const MentorsPage = () => {

  const [carousel, setCarousel] = useState({
    carouselOrietation: 0,
    elementOrientation: 0,
    focusElement: 0,
    prevElement: 9,
    nextElement: 1
  })

  const [activeMentor, setActiveMentor] = useState(mentorData[0])

  useEffect(() => {
    const info = mentorData.filter((elem) => carousel.focusElement === elem.id)
    setActiveMentor(info[0])
  })

  console.log(activeMentor)

  return (
    <div className="mentors-page">
      <CarouselComponent carousel={carousel} setCarousel={setCarousel}/>
      <div className="bottom-section">
        <BookSessionButton focusElement={activeMentor.id}/>
        <MentorNameContainer name={activeMentor.name}/>
      </div>
    </div>
  )
}

export default MentorsPage
