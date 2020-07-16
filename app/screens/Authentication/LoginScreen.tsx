import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import styled from 'styled-components/native'

import { AuthenticationStackParamList } from '../../navigation/types'
import { AuthenticationScreenName } from '../../navigation/ScreenNames'
import { Layout, LoginForm, Button } from '../../components'

const BlueContainer = styled.View`
  background-color: ${props => props.theme.colour.blue};
  flex: 0.4;
`

const Container = styled.View`
  background-color: ${props => props.theme.colour.white};
  flex: 0.6;
  padding: 32px 24px;
  margin-bottom: 32px;
`

export const LoginScreen = ({ 
  navigation 
}: StackScreenProps<AuthenticationStackParamList, AuthenticationScreenName.LOGIN>) => {
  return (
    <Layout fullwidth>
      <BlueContainer></BlueContainer>
      <Container>
        <LoginForm />
        <Button primary title={"Create Account"} onPress={() => navigation.push(AuthenticationScreenName.SIGN_UP)}></Button>
      </Container>
    </Layout>
  )
}
