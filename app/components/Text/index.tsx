import React from 'react'
import styled from 'styled-components/native'
import { Text as DefaultText } from 'react-native'

type TextProps = DefaultText['props'] & {
  title?: boolean,
  bold?: boolean
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ title }) => title ? '32px' : '16px'};
  font-family: ${({ theme, title, bold }) => title ? theme.font.black : (bold ? theme.font.bold : theme.font.regular)};
  color: ${({ theme }) => theme.colour.black};
  margin-bottom: ${({ theme, title }) => title ? '16px' : '16px'};
`
