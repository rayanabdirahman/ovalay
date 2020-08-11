import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import { BottomTabParamList } from '../../navigation/types'
import { BottomNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout } from '../../components/Layout'
import { ContentContainer } from '../../components/Layout'
import { Text } from '../../components/Text'
import { CardList } from '../../components/Card/CardList'
import { products } from '../../temp/product'

export const FeedScreen = ({  }: StackScreenProps<BottomTabParamList, BottomNavigatorScreenName.FEED>) => {
  return (
    <Layout fullwidth>
      <ContentContainer>
        <Text h1>Feed</Text>
        <CardList list={products} />
      </ContentContainer>
    </Layout>
  )
}
