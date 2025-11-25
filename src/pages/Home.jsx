import React from 'react'
import MainBanner from '../componets/MainBanner'
import MiddleSection from '../componets/MiddleSection'
import IconTreate from '../componets/IconTreate'
import SalesSection from '../componets/SalesSection'
import MensGlasses from '../componets/MensGlasses'
import KidsEye from '../componets/KidsEye'
import FacilitySection from '../componets/FacilitySection'
import ClientReview from '../componets/ClientReview'

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
    </div>
  )
}

export default Home