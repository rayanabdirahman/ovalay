import styled from 'styled-components/native'
import { Button as DefaultButton } from 'react-native'
import { Feather } from '@expo/vector-icons'
import React from 'react'

import { Text } from '../Text'
import { theme } from '../../Theme'
 
type ButtonProps = DefaultButton['props'] & {
  large?: boolean
  secondary?: boolean
  icon?: string
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
  align-items: center;
  flex-direction: row;
`

const ButtonText = styled(Text)<{ secondary?: boolean }>`
  font-family: ${({ theme }) => theme.font.bold };
  color: ${({ secondary, theme }) => secondary ? theme.colour.black :  theme.colour.white };
  margin: 0;
`

export const Button = (props: ButtonProps) => (
  <ButtonContainer {...props}>
    {props.icon && <Feather style={{ marginRight: 8 }} name={props.icon} size={20} color={theme.colour.white} />}
    <ButtonText secondary={props.secondary}>{props.title}</ButtonText>
  </ButtonContainer>
)
