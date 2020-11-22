import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'
import * as React from 'react'

import ImagePicker from '../../atoms/ImagePicker'
import Caption from '../../atoms/Caption'

type Props = DefaultView['props'] & {
  selectedImage(image: string): void
}

const Style = styled.View<Props>`
  flex-direction: row;
  flex: 1;
`

export default function ImageCaption(props: Props) {
  return (
    <Style>
      <ImagePicker style={{ flex: 0.4 }} selectedImage={props.selectedImage} />
      <Caption placeholder="write a caption" style={{ flex: 0.6 }} />
    </Style>
  )
}
