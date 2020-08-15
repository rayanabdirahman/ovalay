import React from 'react'
import { Image as DefaultImage } from 'react-native'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type Props = DefaultImage['props'] & {
  small?: boolean
}

// TODO: images should shrink or grow to fit white space
const StyledImage = styled.Image<Props>`
  width: ${ props => props.small ? '64px' : '140px' };
  height: ${ props => props.small ? '64px' : '140px' };
  margin-right: ${ props => props.small ? '8px' : '16px' }; 
  border-radius: 8px;
`

export const Image: React.FunctionComponent<Props> = ({ small, source }) => (
  <TouchableOpacity onPress={() => alert('product')}>
    <StyledImage small={small} source={source} resizeMode="cover" />
  </TouchableOpacity>
)