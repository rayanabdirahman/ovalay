// import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

// import { FeedScreenStackParamList } from '../../navigation/types'
// import { FeedNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout, ContentContainer, Text } from '../../components'

export const ProductScreen = ({
  navigation,
  title
}: any) => {
  return (
    <Layout fullwidth>
      <ContentContainer smallPaddingTop>
        <Text h1>{title}</Text>
      </ContentContainer>
    </Layout>
  )
}
