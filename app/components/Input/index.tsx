import React from 'react'
import styled from 'styled-components/native'
import { TextInput  as DefaultTextInput, View as DefaultView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../Theme'
import { Button, Text } from 'native-base'

type Props = DefaultTextInput['props'] & DefaultView['props']

export const StyledSearchInput = styled.TextInput<Props>`
  border: 1px solid ${ ({ theme }) => theme.colour.lightgrey };
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${ ({ theme }) => theme.colour.lightgrey };
  flex: 1;
`

export const SearchBar = (props: Props) => (
  <DefaultView style={{ flexDirection: "row" }}>
    <StyledSearchInput {...props} />
    <Button transparent style={{ flex: 0.35 }}>
      <Text style={{ color: theme.colour.black, fontSize: 14 }} >Cancel</Text>
    </Button>
  </DefaultView>
)