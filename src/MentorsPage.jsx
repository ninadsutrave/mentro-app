import { useState, useEffect } from 'react'
import './MentorsPage.css'

//importing components
import CarouselComponent from './components/CarouselComponent'
import MentorRating from './components/MentorRating'
import MentorInfo from './components/MentorInfo'
import MentorNameContainer from './components/MentorNameContainer'
import BookSessionButton from './components/BookSessionButton'
import mentorData from './MentorData'
import overlay from './assets/images/overlay.png'
import overlay2 from './assets/images/overlay2.png'

const MentorsPage = () => {

  const [carousel, setCarousel] = useState({
    carouselOrietation: 0,
    elementOrientation: 0,
    focusElement: 0
  })

  const [activeMentor, setActiveMentor] = useState(mentorData[0])

  var overlayImg = (activeMentor.id % 2)?overlay2:overlay

  useEffect(() => {
    const info = mentorData.filter((elem) => carousel.focusElement === elem.id)
    setActiveMentor(info[0])
  }, [carousel])

  return (
    <div className="mentors-page">
      <img className="overlay-img" src={overlayImg}/>
      <CarouselComponent carousel={carousel} setCarousel={setCarousel} activeMentor={activeMentor}/>
      <div className="carousel-element" key="11">
          <img className="mentor-img" id="center-img" src={activeMentor.image}/>
      </div>
      <div className="left-section">
        <div className="mentor-info-wrapper">
          <MentorRating activeMentor={activeMentor}/>
          <MentorInfo activeMentor={activeMentor}/>
        </div>
          <BookSessionButton focusElement={activeMentor.id}/>
      </div>
      
      <div className="right-section">
        <MentorNameContainer name={activeMentor.name}/>
      </div>
    </div>
  )
}

export default MentorsPage
