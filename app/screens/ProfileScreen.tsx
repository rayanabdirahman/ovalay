import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import Layout from '../components/Layouts'
import { getProducts } from '../store/actions/product'
import { State } from '../store'
import { ProductState, SessionState } from '../store/types'
import { ProfileParamList, ProfileTabRouteName } from '../navigation/types'
import { theme } from '../components/Theme'
import { ProductModel } from '../domain/interfaces'
import ProfileHeader from '../components/organisms/ProfileHeader'
import { ImageGrid } from '../components/organisms/ImageGrid'

export default function ProfileScreen(
  { navigation }: StackScreenProps<ProfileParamList, ProfileTabRouteName.PROFILE_SCREEN>
) {
  const dispatch = useDispatch()
  const { user } = useSelector<State, SessionState>(state => state.session)
  const { products } = useSelector<State, ProductState>(state => state.product)

  React.useEffect(() => {
    navigation.setOptions({})
    // dispatch action to get products
    dispatch(getProducts())
  }, [navigation])

  return !products ?
    <ActivityIndicator size="small" color={theme.colour.black} /> : (
    <Layout>
      <ProfileHeader name={user?.name} username={user?.username} />
      <ImageGrid images={products}  />
    </Layout>
  )
}
