import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import { FeedScreenStackParamList } from '../../navigation/types'
import { FeedNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout, ContentContainer, Text } from '../../components'

export const ProductScreen = ({
  navigation,
}: StackScreenProps<FeedScreenStackParamList, FeedNavigatorScreenName.PRODUCT>) => {
  return (
    <Layout fullwidth>
      <ContentContainer>
        <Text h1>Product</Text>
      </ContentContainer>
    </Layout>
  )
}
