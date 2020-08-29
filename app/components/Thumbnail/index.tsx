import React from 'react'
import { View as DefaultView, TouchableOpacity } from 'react-native'
import { Thumbnail as DefaultThumbnail } from 'native-base'
import { Text } from '../../components/Text'

export type Props = DefaultThumbnail['props'] & {
  name?: string
  subtitle?: string
  center?: boolean
}

export const Thumbnail = (props: Props) => (
  <TouchableOpacity
    style={{ flexDirection: "row", marginBottom: 16 }}
    onPress={() => alert('profile')}>
    <DefaultThumbnail {...props} />
    <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
      <Text bold>{props.name}</Text>
      <Text light>{props.subtitle}</Text>
    </DefaultView>
  </TouchableOpacity>
)