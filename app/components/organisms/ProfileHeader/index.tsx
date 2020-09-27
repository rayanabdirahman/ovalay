import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import { Thumbnail } from '../Thumbnail'

type Props = {
  avatar: string
  name: string
  username: string
  bio?: string
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const ProfileHeader = ({ avatar, name, username, bio }: Props) => (
  <>  
  <Container>
    <DefaultView style={{ flex: .7 }}>
      <Thumbnail
        avatar={ avatar }
        username={ name }
        info={`@${username}`}
        />
    </DefaultView>
    <DefaultView style={{ flex: .4 }}>
      <Button title="Following" onPress={() => alert('Following')} />
    </DefaultView>
  </Container>
  <Text>{ bio }</Text>
  </>
)

export { ProfileHeader }
