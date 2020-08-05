import * as React from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { BottomTabParamList } from '../../navigation/types'
import { RootNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout, ContentContainer, Text, WishList } from '../../components'
import { ScrollView } from 'react-native'

export const WishListScreen = ({ navigation }: StackScreenProps<BottomTabParamList, RootNavigatorScreenName.WISHLIST>) => {
  return (
    <Layout fullwidth>
      <ContentContainer>
        <Text h1>Wishlist</Text>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <WishList navigation={navigation} />
        </ScrollView>
      </ContentContainer>
    </Layout>
  )
}
