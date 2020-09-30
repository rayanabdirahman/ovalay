import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../../Theme';

type Props = DefaultView['props'] & {}

const ReviewContainer = styled.View<Props>`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const ReviewStars = (props: Props) => {
  return (
    <ReviewContainer {...props}>
      <AntDesign style={{ marginRight: 4 }} name="star" size={16} color={theme.colour.black} />
      <AntDesign style={{ marginRight: 4 }} name="star" size={16} color={theme.colour.black} />
      <AntDesign style={{ marginRight: 4 }} name="star" size={16} color={theme.colour.black} />
      <AntDesign style={{ marginRight: 4 }} name="star" size={16} color={theme.colour.black} />
      <AntDesign style={{ marginRight: 4 }} name="star" size={16} color={theme.colour.grey} />
    </ReviewContainer>
  )
}

export { ReviewStars }
