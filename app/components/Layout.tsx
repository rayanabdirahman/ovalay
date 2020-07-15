import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { ThemeProps, theme } from './Themed'

export type LayoutProps = ThemeProps & View['props'] & {
  fullwidth?: boolean
  background?: string
}

const ScreenContainer = styled.View`
  padding: ${(props: LayoutProps) => props.fullwidth ? theme.layout.fullwidth : theme.layout.container};
  background-color: ${(props: LayoutProps) => props.background === 'blue' ? theme.colour.blue :  theme.colour.white};
  height: 100%;
`

export const Layout = (props: LayoutProps) => (
  <ScreenContainer {...props}>
    { props.children }
  </ScreenContainer>
)
