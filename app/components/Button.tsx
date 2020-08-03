import React from 'react'
import styled from 'styled-components/native'
import { Button as DefaultButton } from 'react-native'
import { Text } from './Text'

export type ButtonProps = DefaultButton['props'] & {
  primary?: boolean
  secondary?: boolean
  outline?: boolean
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${ props => props.primary ? props.theme.colour.black : props.theme.colour.white };
  border: ${ props => props.outline ? 0 : `2px solid ${props.theme.colour.black}` };
  padding: ${ props => props.outline ? 0 : '20px 16px' };
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${ props => props.outline ? '8px' : '16px' };
  margin-left: ${ props => props.outline ? '8px' : 0 };
`

const ButtonText = styled(Text)<ButtonProps>`
  color: ${ props => props.primary ? props.theme.colour.white : props.theme.colour.black };
  margin: 0;
  font-weight: ${ props => props.theme.fontweight.bold };
`

export const Button = (props: ButtonProps) => (
  <ButtonContainer {...props}>
    <ButtonText {...props}>{props.title}</ButtonText>
  </ButtonContainer>
)
