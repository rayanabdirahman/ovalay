import React from 'react'
import styled from 'styled-components/native'
import { Dimensions, FlatList, View as DefaultView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RootScreenName } from '../../../navigation/types';
import { Thumbnail } from '../Thumbnail';
import { Text } from '../../atoms/Text'
import { ReviewStars } from '../ReviewStars';

type Props = {
  comment: string
  username: string
}

const Review = ({ comment, username }: Props) => {
  return (
    <DefaultView style={{ marginBottom: 16 }}>
      <Thumbnail
        onPress={() => alert('Review profile')}
        avatar="https://dummyimage.com/150x150/c4c4c4/c4c4c4"
        username={username}
        />

        <DefaultView style={{ marginLeft: 64, marginTop: -44 }}>
          <ReviewStars style={{ marginBottom: 16 }} />
          <Text>{comment}</Text>
        </DefaultView>
    </DefaultView>
  )
}



export { Review }
