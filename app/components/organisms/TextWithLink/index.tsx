import { View as DefaultView } from 'react-native'
import * as React from 'react'

import { Text } from '../../atoms/Text'
import { Link } from '../../atoms/Link'

type Props = DefaultView['props'] & {
  text: string,
  linkTitle: string,
  navigateTo: () => void
}

export default function TextWithLink(props: Props) {
  return (
    <DefaultView {...props} style={{ flexDirection: "row", justifyContent: "center" }}>
      <Text>{props.text}</Text>
      <Link title={props.linkTitle} onPress={props.navigateTo} />
    </DefaultView>
  )
}
