import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Dimensions, ImageBackground, View as DefaultView, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { theme } from '../../components/Theme'
import { Layout, Text, Input, Thumbnail, ProfileHeader, ProfileSwitch, ImageGrid } from '../../components'
import { Row } from 'native-base'

const images = [
  {
    _id: '001',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '002',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '003',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '004',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '005',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '006',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '007',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '008',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '008',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
]

const Profile = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.PROFILE>) => {
  return (
    <>
    <Layout>
      <ProfileHeader
        avatar={images[0].image}
        name="Jane Brown"
        username="Janebrown20"
        bio= "Atque ratione saepe reiciendis omnis omnis esse. Aut quia porro quam et. Qui odio veritatis et adipisci."
        />
      <ProfileSwitch />
      <ImageGrid images={images} />
    </Layout>
    </>
  )
}



export { Profile }