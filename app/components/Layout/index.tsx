import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'
import { Text } from '../Text'

type LayoutProps = DefaultView['props'] & {
  title?: string
}

const ScreenContainer = styled.View<LayoutProps>`
  padding: 64px 10px 0;
  background-color: ${({ theme }) => theme.colour.white};
  height: 100%;
  position: relative;
`

export const Layout = (props: LayoutProps) => (
  <ScreenContainer {...props}>
    <Text title>{ props.title }</Text>
    { props.children }
  </ScreenContainer>
)