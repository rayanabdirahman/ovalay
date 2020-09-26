import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'
import { Thumbnail as DefaultThumbnail } from 'native-base'
import { Text } from '../../atoms/Text'

type ThumbnailProps = DefaultThumbnail['props'] & {
  large?: boolean
  title?: string
  subHeading?: string
}

const ThumbnailContainer = styled.View<ThumbnailProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

export const Thumbnail = (props: ThumbnailProps) => (
  <ThumbnailContainer {...props}>
    <DefaultThumbnail style={{ marginRight: 8 }} {...props} />
    <DefaultView>
      <Text  bold style={{ marginBottom: 0 }}>{props.title}</Text>
      <Text style={{ marginBottom: 0 }}>{props.subHeading}</Text>
    </DefaultView>
  </ThumbnailContainer>
)
