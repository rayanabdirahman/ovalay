import * as React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { ThemeProps } from './Themed'

export type LayoutProps = ThemeProps & View['props'] & {
  fullwidth?: boolean
  background?: string
}

const ScreenContainer = styled.View`
  padding: ${(props: LayoutProps) => props.fullwidth ? props.layout.fullwidth :  props.layout.container};
  background-color: ${(props: LayoutProps) => props.background === 'blue' ? props.colour.blue :  props.colour.white};
`

export const Layout = ({ children, fullwidth, background }: LayoutProps) => (
  <ScreenContainer fullwidth={fullwidth} background={background}>
    { children }
  </ScreenContainer>
)
