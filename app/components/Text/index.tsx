import React from 'react'
import styled from 'styled-components/native'
import { Text as DefaultText } from 'react-native'

type TextProps = DefaultText['props'] & {
  title?: boolean
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ title }) => title ? '32px' : '16px'};
  font-family: ${({ theme, title }) => title ? theme.font.black : theme.font.regular};
  color: ${({ theme }) => theme.colour.black };
`
