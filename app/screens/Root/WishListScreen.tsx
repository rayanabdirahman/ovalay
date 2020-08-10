import * as React from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { BottomTabParamList } from '../../navigation/types'
import { BottomNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout } from '../../components/Layout'
import { ContentContainer } from '../../components/Layout'
import { Text } from '../../components/Text'
import { WishList } from '../../components/WishList'
import { ScrollView } from 'react-native'

export const WishListScreen = ({ navigation }: StackScreenProps<BottomTabParamList, BottomNavigatorScreenName.WISHLIST>) => {
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
