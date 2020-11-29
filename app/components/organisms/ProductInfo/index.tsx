import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as React from 'react'

import { Thumbnail } from '../../atoms/Thumbnail'
import { theme } from '../../Theme'
import { View } from 'native-base'
import { Text } from '../../atoms/Text'
import { ContentContainer } from '../../Layouts'

type Props = {
  seller: string,
  caption: string,
  description: string,
  color: string
}

const Container = styled.View<Props>`
  flex-direction: column;
  margin-bottom: 8px;
`

export default function ProductInfo({ seller, caption, description, color }: Props) {
  return (
    <ContentContainer>
      <Container>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
          <Text bold style={{ marginRight: 8, marginBottom: 0 }}>{seller}</Text>
          <Text style={{ marginBottom: 0 }}>{caption}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{description}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Colour: {color}</Text>
        </View>
      </Container>
    </ContentContainer>
  )
}
