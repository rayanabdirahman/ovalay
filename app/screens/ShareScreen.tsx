import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as React from 'react'

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

export default function ShareScreen() {
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
      headerRight: () => <Button title="Add product" onPress={() => alert('This is a button!')} />
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
        <Input placeholder="description" />
        <Input placeholder="price" />
        <Input placeholder="colour" />
        <Input placeholder="sizes" />
        <Input placeholder="stock quantity" />
      </ScrollView>
    </Layout>
  )
}
