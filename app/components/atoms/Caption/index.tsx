import { TextInput as DefaultTextInput } from 'react-native'
import styled from 'styled-components/native'
import * as React from 'react'

type CaptionProps = DefaultTextInput['props'] & {}

const Caption = styled.TextInput<CaptionProps>`
  padding: 20px 0 20px 24px;
  background-color: ${({ theme }) => theme.colour.white};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colour.grey};
  margin-bottom: 16px;
  height: 100px;
`

export default Caption
