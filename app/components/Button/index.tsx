import React from 'react'
import styled from 'styled-components/native'
import { Button as DefaultButton } from 'react-native'
import { Text } from '../Text'

export type Props = DefaultButton['props'] & {
  primary?: boolean
  secondary?: boolean
}

const BaseContainer = styled.TouchableOpacity<Props>`
  background-color: ${ ({ primary, theme }) => primary ? theme.colour.black : theme.colour.white };
  border: 2px solid ${ ({ theme }) => theme.colour.black};
  padding: 20px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled(Text)<Props>`
  color: ${ ({ primary, theme }) => primary ? theme.colour.white : theme.colour.black };
  margin: 0;
`

export const Button = (props: Props) => (
  <BaseContainer {...props}>
    <ButtonText bold {...props}>{props.title}</ButtonText>
  </BaseContainer>
)