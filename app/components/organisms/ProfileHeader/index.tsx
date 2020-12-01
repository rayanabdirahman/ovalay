import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'
import * as React from 'react'

import { Thumbnail } from '../../atoms/Thumbnail'
import { theme } from '../../Theme'
import { ContentContainer } from '../../Layouts'
import { Button } from '../../atoms/Button'

type Props = {
  name?: string,
  username?: string
}

const Container = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`

export default function ProfileHeader({ name, username }: Props) {
  return (
    <ContentContainer>
      <Container>
        <DefaultView style={{ flex: 0.6 }}>
          <Thumbnail large username={name} info={`@${username}`} />
        </DefaultView>
        <DefaultView style={{ flex: 0.4 }}>
          <Button style={{ marginBottom: 0}} title="Follow" onPress={() => alert("Following")} />
        </DefaultView>
      </Container>
    </ContentContainer>
  )
}
