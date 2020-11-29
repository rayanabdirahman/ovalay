import styled from 'styled-components/native'
import { Feather, AntDesign } from '@expo/vector-icons'
import * as React from 'react'

import { theme } from '../../Theme'
import { ContentContainer } from '../../Layouts'

type Props = {
  like: boolean
}

const Container = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`

export default function ProductIcons({ like }: Props) {
  return (
    <ContentContainer>
      <Container>
        <AntDesign 
          name={ like ? "heart" : "hearto" }
          size={28}
          color={ like ? theme.colour.red : theme.colour.black }
          style={{ marginRight: 12 }}
        />
      </Container>
    </ContentContainer>
  )
}
