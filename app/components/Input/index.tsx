import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TextInput  as DefaultTextInput, View as DefaultView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text } from '../Text'

type Props = DefaultTextInput['props'] & DefaultView['props']

const StyledSearchInput = styled.TextInput<Props>`
  border: 1px solid ${ ({ theme }) => theme.colour.lightgrey };
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${ ({ theme }) => theme.colour.lightgrey };
  flex: 1;
`

export const SearchBar = (props: Props) => {
  const navigation = useNavigation()
  // didkeyboardShow state used to hide or show cancel butotn
  const [ didkeyboardShow, setKeyboadState ] = useState<boolean>(false)
  return (
    <DefaultView style={{ flexDirection: "row", alignItems: "center" }}>
      <StyledSearchInput
        onFocus={ () => setKeyboadState(true) }
        onBlur={ () => setKeyboadState(false) }
        autoFocus
        {...props} />
  
      {
        didkeyboardShow && 
        <TouchableOpacity
          onPress={ () => navigation.goBack() }
          style={{ marginLeft: 8 }}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      }
    </DefaultView>
  )
}
