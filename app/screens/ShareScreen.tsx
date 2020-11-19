import { Button, Platform, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as DefaultImagePicker from 'expo-image-picker'
import * as React from 'react'

import Layout from '../components/Layouts'
import ImagePicker from '../components/atoms/ImagePicker'

export default function ShareScreen() {
  const [image, setImage] = React.useState(null)
  const navigation = useNavigation()

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Post"
        />
      )
    })
  }, [])

  const handleImageSelection = async (image) => {
    console.log('PARENT: ', image);
    setImage(image);
  }

  return (
    <Layout>
      <ImagePicker onSelectedImage={handleImageSelection} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </Layout>
  )
}
