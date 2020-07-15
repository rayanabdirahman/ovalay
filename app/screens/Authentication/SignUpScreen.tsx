import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import styled from 'styled-components/native'

import { AuthenticationStackParamList } from '../../types'
import { AuthenticationScreenName } from '../../constants/ScreenNames'
import { Layout } from '../../components/Layout'
import { ThemeProps } from '../../components/Themed'
import { SignUpForm } from '../../components/SignUpFormForm '
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'

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

const Footer = styled.View<ThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const SignUpScreen = ({
  navigation,
}: StackScreenProps<AuthenticationStackParamList, AuthenticationScreenName.SIGN_UP>) => {
  return (
    <Layout fullwidth>
      <BlueContainer></BlueContainer>
      <Container>
        <SignUpForm />
        <Footer>
          <Text light>Already have an account?</Text>
          <Button outline title={"Login"} onPress={() => navigation.push(AuthenticationScreenName.LOGIN)}/>
        </Footer>
      </Container>
    </Layout>
  )
}
