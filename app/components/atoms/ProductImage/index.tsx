import { Image as DefaultImage, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'

type Props = {
  source: string
}

const ProductImage = ({ source }: Props) => {
  return (
    <TouchableOpacity onPress={() => alert('add double tap for like')}>
      <DefaultImage 
        style={{ 
          borderRadius: 5,
          aspectRatio: 3/3.5
        }}
        source={{ uri: source }} />
    </TouchableOpacity>
  )
}

export default ProductImage
