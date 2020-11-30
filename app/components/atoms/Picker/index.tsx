import styled from 'styled-components/native'
import { Content, Form, Picker as DefaultPicker, Icon } from 'native-base'
import * as React from 'react'

import { theme } from '../../Theme'

type Props = DefaultPicker['props'] & {
  items: string[]
  label: string
  selectedValue?: string
  onValueChange: () => void
}

export default function Picker(props: Props) {
  const [state, setState] = React.useState({ selected: `key0--${props.label}` })

  const onValueChange = (value: string) => {
    setState({
      selected: value
    })
  }

  return (
    <Content>
      <Form {...props}>
        <DefaultPicker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" style={{ color: theme.colour.grey }} />}
          style={{ 
            borderWidth: 1,
            borderColor: theme.colour.black,
            width: "100%",
          }}
          selectedValue={state.selected}
          onValueChange={onValueChange}>
          <DefaultPicker.Item label={props.label} value={`key0--${props.label}`} />
          { props.items.map((item: string, index: number) => (
            <DefaultPicker.Item label={item} value={`key--${index}`} />
          ))}
        </DefaultPicker>
      </Form>
    </Content>
  )
}
