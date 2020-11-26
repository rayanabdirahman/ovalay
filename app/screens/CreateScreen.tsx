import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import * as React from 'react'

import { theme } from '../components/Theme'
import Layout from '../components/Layouts'
import ImageCaption from '../components/organisms/ImageCaption'
import { Input } from '../components/atoms/Input'
import { CreateProductModel } from '../domain/interfaces'
import { BottomTabRouteName } from '../navigation/types'
import { createProduct } from '../store/actions/product'

export default function CreateScreen() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [state, setState] = React.useState<CreateProductModel>({
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
          onPress={() => dispatch(createProduct({ ...state }, navigation))}
        />
      )
    })
  }, [navigation, state])

  return (
    <Layout>
      <ImageCaption selectedImage={(image: string) => setState({ ...state, image: image })}/>
      <ScrollView>
        <Input placeholder="name" onChangeText={(value: string) => { setState({ ...state, name: value }) }}/>
        <Input placeholder="price" onChangeText={(value: string) => setState({ ...state, price: value })}/>
        <Input placeholder="colour" onChangeText={(value: string) => setState({ ...state, color: value })}/>
        <Input placeholder="types" onChangeText={(value: string) => setState({ ...state, type: value })}/>
        <Input placeholder="brand" onChangeText={(value: string) => setState({ ...state, brand: value })}/>
        <Input placeholder="description" onChangeText={(value: string) => setState({ ...state, description: value })}/>
        <Input keyboardType="numeric" placeholder="stock quantity" onChangeText={(value: number) => setState({ ...state, availableStockQuantity: value })}/>
      </ScrollView>
    </Layout>
  )
}
