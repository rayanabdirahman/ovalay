import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import styled from 'styled-components/native'

import { AuthenticationStackParamList } from '../../navigation/types'
import { AuthenticationNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout, SignUpForm, Text, Button } from '../../components'

const Container = styled.View`
  flex: 1;
  padding: 32px 24px;
  margin-top: 32px;
`

const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const SignUpScreen = ({
  navigation
}: StackScreenProps<AuthenticationStackParamList, AuthenticationNavigatorScreenName.SIGN_UP>) => {
  return (
    <Layout fullwidth>
      <Container>
        <SignUpForm />
        <Footer>
          <Text light>Already have an account?</Text>
          <Button outline title={"Login"} onPress={() => navigation.push(AuthenticationNavigatorScreenName.LOGIN)}/>
        </Footer>
      </Container>
    </Layout>
  )
}
