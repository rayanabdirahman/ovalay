// import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

// import { FeedScreenStackParamList } from '../../navigation/types'
// import { FeedNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout } from '../../components/Layout'
import { ContentContainer } from '../../components/Layout'
import { Text } from '../../components/Text'

export const ProductScreen = ({
  navigation,
  title
}: any) => {
  return (
    <Layout fullwidth>
      <ContentContainer noPaddingTop>
        <Text h1>{title}</Text>
      </ContentContainer>
    </Layout>
  )
}
