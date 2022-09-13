import React from 'react'
import { Button } from './ButtonLined.styles'

const ButtonLined = (props, {...btnConfig}) => {
  return (
    <Button {...btnConfig}>{props.children}</Button>
  )
}

export default ButtonLined