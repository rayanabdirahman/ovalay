import styled from 'styled-components/native'
import { View } from 'react-native'
import * as React from 'react'

import { theme } from '../../Theme'
import { Text } from '../../atoms/Text'
import { ContentContainer } from '../../Layouts'
import Picker from '../../atoms/Picker'

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
        <Text>{description}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Picker
            style={{ marginRight: 8}}
            items={[color, "yellow", "white", "red"]}
            label="colour"
            onValueChange={() => console.log('Testing')} 
          />
          <Picker
            items={[color, "yellow", "white", "red"]}
            label="size"
            onValueChange={() => console.log('Testing')}
          />
        </View>
      </Container>
    </ContentContainer>
  )
}
