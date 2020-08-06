import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'

export type LayoutProps = DefaultView['props'] & {
  fullwidth?: boolean
  noPaddingTop?: boolean
  background?: string
}

export const ContentContainer = styled.View<LayoutProps>`
  flex: 1;
  padding-top: ${ props => props.noPaddingTop ? 0 : '32px'};
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 32px;
`

const ScreenContainer = styled.View<LayoutProps>`
  padding: ${props  => props.fullwidth ? props.theme.layout.fullwidth : props.theme.layout.container};
  background-color: ${props => props.background === 'blue' ? props.theme.colour.blue :  props.theme.colour.white};
  height: 100%;
  position: relative;
`

export const Layout = (props: LayoutProps) => (
  <ScreenContainer {...props}>
    { props.children }
  </ScreenContainer>
)
