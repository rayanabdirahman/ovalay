import { StackScreenProps } from '@react-navigation/stack'
import { useDispatch } from 'react-redux'
import * as React from 'react'

import Layout from '../../components/Layouts'
import { Text } from '../../components/atoms/Text'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { Input } from '../../components/atoms/Input'
import { Button } from '../../components/atoms/Button'
import TextWithLink from '../../components/organisms/TextWithLink'
import { UserRolesEnum } from '../../domain/enums'
import { SignUpModel } from '../../domain/interfaces'
import { signUpUser } from '../../store/actions/authentication'

export default function SignUpScreen(
  { navigation, route }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_UP>
) {
  const dispatch = useDispatch()
  const [state, setState] = React.useState<SignUpModel>({
    name: '',
    username: '',
    email: '',
    password: '',
    role: route.params?.userRole
  })

  React.useEffect(() => {
  }, [])

  return (
    <Layout>
      <Text title style={{ marginBottom: 8 }}>Sign up</Text>
      <Text>
        { route.params?.userRole === UserRolesEnum.SELLER ?
          "Create an account to reach your customers online" :
          "Create an account to shop your favourite highstreet stores from one place"
        }
      </Text>
      <Input placeholder="Username" onChangeText={(value: string) => setState({ ...state, username: value })} />
      <Input placeholder="Name" onChangeText={(value: string) => setState({ ...state, name: value })} />
      <Input placeholder="Email" onChangeText={(value: string) => setState({ ...state, email: value })} />
      <Input secureTextEntry placeholder="Password" onChangeText={(value: string) => setState({ ...state, password: value })} />

      <Button large title="Create an account" onPress={() => dispatch(signUpUser({ ...state }))} />
      <TextWithLink
        text="Already have an account?"
        linkTitle="Sign in"
        navigateTo={() => navigation.navigate(AuthScreenName.SIGN_IN)}/>
    </Layout>
  )
}