import React from 'react'
import styled from 'styled-components/native'
import { Button } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../../Theme'

type Props = {}

const Container = styled.View`
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colour.grey};
  border-radius: 4px;
  margin-bottom: 16px;
`

const ProfileSwitch = ({  }: Props) => (
  <Container>
    <Button style={{ flex: .5, justifyContent: "center", backgroundColor: theme.colour.black }}>
      <AntDesign name="tag" size={24} color={theme.colour.white} />
    </Button>
    <Button style={{ flex: .5, justifyContent: "center" }} transparent>
      <AntDesign name="heart" size={24} color={theme.colour.black} />
    </Button>
  </Container>
)

export { ProfileSwitch }
