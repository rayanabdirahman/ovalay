import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as React from 'react'

import { theme } from '../components/Theme'
import Layout from '../components/Layouts'
import ImageCaption from '../components/organisms/ImageCaption'
import { Input } from '../components/atoms/Input'
import { ScrollView } from 'react-native-gesture-handler'

type CreateProduct = {
  name: string
  price: string
  color: string
  type: string
  brand: string
  description: string
  image: string
  sellerId: string
  availableStockQuantity: number
}

export default function CreateScreen() {
  const navigation = useNavigation()
  const [state, setState] = React.useState<CreateProduct>({
    name: "",
    price: "",
    color: "",
    type: "",
    brand: "",
    description: "",
    image: "",
    sellerId: "",
    availableStockQuantity: 0
  })

  React.useEffect(() => {
    navigation.setOptions({
      title: 'New product',
      headerRight: () => (
        <Button
          color={theme.colour.black}
          title="share" 
          onPress={() => alert('This is a button!')}
        />
      )
    })
  }, [])

  const handleImageSelection = async (image: string) => {
    console.log('PARENT: ', image);
  }  

  return (
    <Layout>
      <ImageCaption selectedImage={handleImageSelection} />
      <ScrollView>
        <Input placeholder="name" />
        <Input placeholder="price" />
        <Input placeholder="colour" />
        <Input placeholder="types" />
        <Input placeholder="brand" />
        <Input placeholder="description" />
        <Input placeholder="stock quantity" />
      </ScrollView>
    </Layout>
  )
}
