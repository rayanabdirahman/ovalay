import React from 'react'
import styled from 'styled-components/native'
import { Button as DefaultButton } from 'react-native'
import { Text } from '../Text'
 
type ButtonProps = DefaultButton['props'] & {
  large?: boolean
  secondary?: boolean
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ secondary, theme }) => secondary ? theme.colour.white : theme.colour.black };
  padding: ${({ large }) => large ? '20px 0' : '8px 0'};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: ${({ secondary, theme }) => secondary ? `2px solid ${theme.colour.black}` :  0 };
`

const ButtonText = styled(Text)<{ secondary?: boolean }>`
  font-family: ${({ theme }) => theme.font.bold };
  color: ${({ secondary, theme }) => secondary ? theme.colour.black :  theme.colour.white };
  margin: 0;
`

export const Button = (props: ButtonProps) => (
  <ButtonContainer {...props}>
    <ButtonText secondary={props.secondary}>{props.title}</ButtonText>
  </ButtonContainer>
)
