import React from 'react'
import styled from 'styled-components/native'
import { Button as DefaultButton } from 'react-native'
import { Text } from '../Text'

type ButtonProps = DefaultButton['props'] & {
  large?: boolean
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ theme }) => theme.colour.black};
  padding: ${({ large }) => large ? '20px 0' : '16px 0'};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`

const ButtonText = styled(Text)`
  font-family: ${({ theme }) => theme.font.bold };
  color: ${({ theme }) => theme.colour.white };
`

export const Button = (props: ButtonProps) => (
  <ButtonContainer {...props}>
    <ButtonText>{props.title}</ButtonText>
  </ButtonContainer>
)
