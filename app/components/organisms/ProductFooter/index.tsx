import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'
import * as React from 'react'

import { theme } from '../../Theme'
import { ContentContainer } from '../../Layouts'
import { Button } from '../../atoms/Button'

type Props = DefaultView['props'] & {
  price: string
}

const Container = styled.View<Props>`
  flex-direction: row;
`

export default function ProductFooter(props: Props) {
  return (
    <ContentContainer>
      <Container {...props}>
        <DefaultView style={{ flex: 1 }}>
          <Button
            large
            title={`£${props.price}`}
            icon="shopping-bag"
            onPress={() => alert('At to basket')} />
        </DefaultView>
      </Container>
    </ContentContainer>
  )
}
