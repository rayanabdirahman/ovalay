import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import styled from 'styled-components/native'

import { AuthenticationStackParamList } from '../../types'
import { AuthenticationScreenName } from '../../navigation/ScreenNames'
import { Layout } from '../../components/Layout'
import { ThemeProps } from '../../components/Themed'
import { SignUpForm } from '../../components/SignUpForm'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'

const Container = styled.View<ThemeProps>`
  flex: 1;
  padding: 32px 24px;
  margin-top: 32px;
`

const Footer = styled.View<ThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const SignUpScreen = ({
  navigation
}: StackScreenProps<AuthenticationStackParamList, AuthenticationScreenName.SIGN_UP>) => {
  return (
    <Layout fullwidth>
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
