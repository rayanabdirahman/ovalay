import React from 'react'
import { View as DefaultView } from 'react-native'
import { Thumbnail as DefaultThumbnail } from 'native-base'
import styled from 'styled-components/native'
import { Text } from '../../atoms/Text'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = TouchableOpacity['props'] & {
  avatar?: string
  username?: string
  info?: string
  small?: boolean
  large?: boolean
}

const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Thumbnail = (props: Props) => {
  return (
    <TouchableOpacity {...props }
      onPress={() => alert('User profile ')}
      style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
      <ProfileContainer>
        <DefaultThumbnail small={props.small} large={props.large} style={{ marginRight: 8 }} source={{ uri: 'https://via.placeholder.com/150/000000/FFFFFF/' }} />
        <DefaultView style={{ flexDirection: "column" }}>
          <Text  bold style={{ marginBottom: 0 }}>{ props.username }</Text>
          <Text  style={{ marginBottom: 0, fontSize: 14 }}>{ props.info }</Text>
        </DefaultView>
      </ProfileContainer>
    </TouchableOpacity>
  ) 
}
