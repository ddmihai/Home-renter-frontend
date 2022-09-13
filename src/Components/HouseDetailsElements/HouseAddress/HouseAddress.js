import React from 'react'
import { HouseCity, HouseNumber, HousePostcode, HouseStreet, PricedSpan, PriceText } from './HouseAddress.styles'



const HouseAddress = ({street, city, number, postcode, typeOftenancy, price}) => {
  return (
    <div>
        <HouseCity>{city}</HouseCity>
        <HouseStreet>{street}</HouseStreet>
        <HouseNumber>{number}</HouseNumber>
        <HousePostcode> {postcode}</HousePostcode>
        <PricedSpan>
            <PriceText>{price}£/ &nbsp;</PriceText>
            <PriceText> {typeOftenancy}</PriceText>
        </PricedSpan>
    </div>
  )
}

export default HouseAddress