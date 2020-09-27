import React from 'react'
import { View as DefaultView } from 'react-native'
import { Thumbnail as DefaultThumbnail } from 'native-base'
import styled from 'styled-components/native'
import { Text } from '../../atoms/Text'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  avatar: string
  username: string
  info: string
  text?: string
}

const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`

export const Thumbnail = (props: Props) => {
  return (
    <TouchableOpacity {...props }
      onPress={() => alert('User profile ')}
      style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
      <UserContainer>
        <DefaultThumbnail style={{ marginRight: 8 }} source={{ uri: props.avatar }} />
        <DefaultView style={{ flexDirection: "column" }}>
          <Text  bold style={{ marginBottom: 4 }}>{ props.username }</Text>
          <Text  style={{ marginBottom: 0 }}>{ props.info }</Text>
        </DefaultView>
      </UserContainer>
      <Text bold>{ props.text }</Text>
    </TouchableOpacity>
  )
}
