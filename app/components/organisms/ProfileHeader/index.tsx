import React from 'react'
import styled from 'styled-components/native'
import { Thumbnail } from 'native-base'
import { View as DefaultView } from 'react-native'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'

type Props = {
  avatar: string
  name: string
  username: string
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex: .5;
`

const ProfileHeader = ({ avatar, name, username }: Props) => (
  <Container>
    <UserContainer>
      <Thumbnail style={{ marginRight: 8 }} source={{ uri: avatar }} />
      <DefaultView style={{ flexDirection: "column" }}>
        <Text  bold style={{ marginBottom: 4 }}>{ name }</Text>
        <Text  style={{ marginBottom: 0 }}>{ username }</Text>
      </DefaultView>
    </UserContainer>
    <DefaultView style={{ flex: .4}}>
      <Button title="Following" onPress={() => alert('Following')} />
    </DefaultView>
  </Container>
)

export { ProfileHeader }
