import React from 'react'
import { Image as DefaultImage, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type Props = DefaultImage['props'] & {
  small?: boolean
  large?: boolean
  radius?: boolean
}

const BaseImage = styled.Image<Props>`
  width: ${ ({ small, large }) => small ? '64px' : ( large ? '300px' : '140px' ) };
  height: ${ ({ small, large }) => small ? '64px' : ( large ? '200px' : '140px' ) };
  margin-right: ${ ({ small }) => small ? '8px' : '16px' }; 
  border-radius: 8px;
`

export const Image: React.FunctionComponent<Props> = (props: Props, radius = true) => (
  <BaseImage {...props} radius={radius} resizeMode="cover" />
)

export const ProductImage = styled(BaseImage)`
  width: 100%;
  border-radius: 0;
  height: 350px;
`
