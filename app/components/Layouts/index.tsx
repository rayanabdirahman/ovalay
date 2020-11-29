import { View as DefaultView,  SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import * as React from 'react'
import { theme } from '../Theme'

type Props =  DefaultView['props'] & {
  fullWidth?: boolean
}

export const ContentContainer = styled.View<Props>`
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colour.white};
`

const LayoutContainer = styled.View<Props>`
  margin-top: 10px;
  margin-left: ${({ fullWidth }) => fullWidth ? 0 : `10px`};
  margin-right: ${({ fullWidth }) => fullWidth ? 0 : `10px`};
  background-color: ${({ theme }) => theme.colour.white};
  height: 100%;
`

export default function Layout(props: Props) {
  return (
    <SafeAreaView style={{ backgroundColor: theme.colour.white }}>
      <LayoutContainer {...props}>
        { props.children}
      </LayoutContainer>
    </SafeAreaView>
  )
}
