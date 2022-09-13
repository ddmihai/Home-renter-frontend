import React from 'react'
import { PresentationWrapper } from './PresentationCards.styles'



const PresentationCards = ({title, subtitle, icon}) => {
  return (
    <PresentationWrapper>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{icon}</p>
    </PresentationWrapper>
  )
}

export default PresentationCards