import React from 'react'
import styled from 'styled-components/native'
import { TextInput as DefaultTextInput } from 'react-native'

type TextInputProps = DefaultTextInput['props'] & {}

export const Input = styled.TextInput<TextInputProps>`
  border-radius: 4px;
  padding: 20px 0 20px 24px;
  background-color: ${({ theme }) => theme.colour.grey};
  margin-bottom: 16px;
`