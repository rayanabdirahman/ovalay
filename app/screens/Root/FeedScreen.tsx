import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'

import { BottomTabParamList } from '../../navigation/types'
import { BottomNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout, ContentContainer, Text, FeedCard } from '../../components'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../../store'
import { findAllProducts } from '../../store/actions/product'

export const FeedScreen = ({ navigation }: StackScreenProps<BottomTabParamList, BottomNavigatorScreenName.FEED>) => {
  const { client } = useSelector<State, State>(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findAllProducts()) // dispatch action to authorise user
  }, [])

  return (
    <Layout fullwidth>
      <ContentContainer>
        <Text h1>Feed</Text>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <FeedCard />
        </ScrollView>
      </ContentContainer>
    </Layout>
  )
}
