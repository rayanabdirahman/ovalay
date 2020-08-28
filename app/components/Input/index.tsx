import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TextInput  as DefaultTextInput, View as DefaultView, Keyboard } from 'react-native'
import { theme } from '../Theme'
import { Button, Text } from 'native-base'

type Props = DefaultTextInput['props'] & DefaultView['props']

const StyledSearchInput = styled.TextInput<Props>`
  border: 1px solid ${ ({ theme }) => theme.colour.lightgrey };
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${ ({ theme }) => theme.colour.lightgrey };
  flex: 1;
`

export const SearchBar = (props: Props) => {
  // didkeyboardShow state used to hide or show cancel butotn
  const [ didkeyboardShow, setKeyboadState ] = useState<boolean>(false)
  return (
    <DefaultView style={{ flexDirection: "row" }}>
      { console.log('keyboard:  ', didkeyboardShow) }
      <StyledSearchInput
        onFocus={ () => setKeyboadState(true) }
        onBlur={ () => setKeyboadState(false) }
        {...props} />
 
      {
        didkeyboardShow && 
        <Button
          onPress={ () => Keyboard.dismiss() }
          transparent>
          <Text style={{ color: theme.colour.black, fontSize: 14 }} >Cancel</Text>
        </Button>
      }
    </DefaultView>
  )
}
