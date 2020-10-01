import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Text } from '../../atoms/Text'

type Props = DefaultView['props'] & {}

const Container = styled.View<Props>`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) =>  theme.colour.black };
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`

const SelectedAddress = (props: Props) => {
  return (
    <Container>
      <Text style={{ marginBottom: 8 }}>100B Rowley Way</Text>
      <Text style={{ marginBottom: 8 }}>Abbey Road</Text>
      <Text style={{ marginBottom: 0 }}>London, NW8 0SW</Text>
    </Container>
  )
}

export { SelectedAddress }
