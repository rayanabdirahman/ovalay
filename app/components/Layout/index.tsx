import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'

type Props = DefaultView['props'] & {
  fullwidth?: boolean
}

const BaseContainer = styled.View<Props>`
  padding: ${ ({ fullwidth })  => fullwidth ? 0 : `0 20px` };
  height: 100%;
  background-color: ${ ({ theme }) => theme.colour.white };
`

const ContentContainer = styled.View<Props>`
  padding: 32px 24px 0;
  margin-top: 32px;
  height: 100%;
`

export const Layout = (props: Props) => (
  <BaseContainer {...props}>
    <ContentContainer>
      { props.children }
    </ContentContainer>
  </BaseContainer>
)