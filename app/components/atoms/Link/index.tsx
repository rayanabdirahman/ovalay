import React from 'react'
import styled from 'styled-components/native'
import { Button as DefaultButton } from 'react-native'
import { Text } from '../Text'

type LinkProps = DefaultButton['props'] & {
  block?: boolean
}

const LinkContainer = styled.TouchableOpacity<LinkProps>`
  border-bottom-color: ${({ theme }) => theme.colour.black};
  border-bottom-width: 1px;
  display: flex;
  align-self: flex-start;
  margin-left: 4px;
`

const LinkText = styled(Text)`
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colour.black};
  margin-bottom: 0;
`

export const Link = (props: LinkProps) => (
  <LinkContainer {...props}>
    <LinkText>{props.title}</LinkText>
  </LinkContainer>
)
