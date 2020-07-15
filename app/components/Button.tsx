import React from 'react'
import styled from 'styled-components/native'
import { Button as DefaultButton } from 'react-native'
import { Text } from './Text'

export type ButtonProps = DefaultButton['props'] & {
  primary?: boolean
  secondary?: boolean
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${ props => props.primary ? props.theme.colour.blue : props.theme.colour.white };
  border: 2px solid ${ props => props.theme.colour.blue };
  padding: 20px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`

const ButtonText = styled(Text)<ButtonProps>`
  color: ${ props => props.primary ? props.theme.colour.white : props.theme.colour.blue };
  margin: 0;
  font-weight: ${ props => props.theme.fontweight.bold };
`

export const Button = (props: ButtonProps) => (
  <ButtonContainer {...props}>
    <ButtonText {...props}>{props.title}</ButtonText>
  </ButtonContainer>
)
