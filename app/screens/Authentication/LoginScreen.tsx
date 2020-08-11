import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import styled from 'styled-components/native'

import { AuthenticationStackParamList } from '../../navigation/types'
import { AuthenticationNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout } from '../../components/Layout'
import { LoginForm } from '../../components/LoginForm'
import { Button } from '../../components/Button'

const ImageContainer = styled.View`
  background-color: ${props => props.theme.colour.white};
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
}: StackScreenProps<AuthenticationStackParamList, AuthenticationNavigatorScreenName.LOGIN>) => {
  return (
    <Layout fullwidth>
      <ImageContainer></ImageContainer>
      <Container>
        <LoginForm />
        <Button primary title={"Create Account"} onPress={() => navigation.push(AuthenticationNavigatorScreenName.SIGN_UP)}></Button>
      </Container>
    </Layout>
  )
}
