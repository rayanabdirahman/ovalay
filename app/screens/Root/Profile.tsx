import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Dimensions, ImageBackground, View as DefaultView, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { theme } from '../../components/Theme'
import { Layout, Text, Input, Thumbnail, ProfileHeader, ProfileSwitch } from '../../components'
import { Row } from 'native-base'

const images = [
  "https://dummyimage.com/150x150/c4c4c4/c4c4c4",
  "https://dummyimage.com/150x150/c4c4c4/c4c4c4",
  "https://dummyimage.com/150x150/c4c4c4/c4c4c4",
  "https://dummyimage.com/150x150/c4c4c4/c4c4c4",
  "https://dummyimage.com/150x150/c4c4c4/c4c4c4",
  "https://dummyimage.com/150x150/c4c4c4/c4c4c4",
  "https://dummyimage.com/150x150/c4c4c4/c4c4c4",
  "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
]

const { width } = Dimensions.get('window')
const Profile = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.PROFILE>) => {
  return (
    <Layout>
      <ProfileHeader
        avatar={images[0]}
        name="Jane Brown"
        username="@Janebrown20"
        bio= "Atque ratione saepe reiciendis omnis omnis esse. Aut quia porro quam et. Qui odio veritatis et adipisci."
        />
      <ProfileSwitch />
    </Layout>
  )
}



export { Profile }