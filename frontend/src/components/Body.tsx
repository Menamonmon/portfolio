import { Text, TextProps } from '@chakra-ui/layout'
import React from 'react'

const Body: React.FC<TextProps> = (props) => {
  const textColor = "gray.700"
  return (
    <Text {...props} py={2} fontSize="lg" color={textColor} /> 
  )
}

export default Body

