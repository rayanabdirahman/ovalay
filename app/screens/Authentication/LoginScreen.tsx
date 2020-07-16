import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import styled from 'styled-components/native'

import { AuthenticationStackParamList } from '../../navigation/types'
import { Layout } from '../../components/Layout'
import { AuthenticationScreenName } from '../../navigation/ScreenNames'
import { LoginForm } from '../../components/LoginForm'
import { Button } from '../../components/Button'
import { ThemeProps } from '../../components/Themed'


const BlueContainer = styled.View<ThemeProps>`
  background-color: ${props => props.theme.colour.blue};
  flex: 0.4;
`

const Container = styled.View<ThemeProps>`
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
