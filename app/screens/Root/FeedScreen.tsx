import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'


import { BottomTabParamList } from '../../navigation/types'
import { RootScreenName } from '../../navigation/ScreenNames'
import { Layout, Text, FeedCard } from '../../components'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

const Container = styled.View`
  flex: 1;
  padding: 32px 24px;
  margin-top: 32px;
`

export const FeedScreen = ({
  navigation,
}: StackScreenProps<BottomTabParamList, RootScreenName.FEED>) => {
  return (
    <Layout fullwidth>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <Text h1>Feed</Text>
          <FeedCard />
        </ScrollView>
      </Container>
    </Layout>
  )
}
