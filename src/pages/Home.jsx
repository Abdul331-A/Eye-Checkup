import React from 'react'
import MainBanner from '../componets/MainBanner'
import MiddleSection from '../componets/MiddleSection'
import IconTreate from '../componets/IconTreate'
import SalesSection from '../componets/SalesSection'
import MensGlasses from '../componets/MensGlasses'
import KidsEye from '../componets/KidsEye'
import FacilitySection from '../componets/FacilitySection'
import ClientReview from '../componets/ClientReview'
import EmergencyContact from '../componets/EmergencyContact'
import Ambulance from '../componets/Ambulance'
import FacillityList from '../componets/FacillityList'
import HomeBottom from '../componets/HomeBottom'

const Home = () => {
  return (
    <div>
      <MainBanner/>
      <MiddleSection/>
      <IconTreate/>
      <SalesSection/>
      <MensGlasses/>
      <KidsEye/>
      <FacilitySection/>
      <ClientReview/>
      <EmergencyContact/>
      <Ambulance/>
      <FacillityList/>
      <HomeBottom/>
    </div>
  )
}

export default Home