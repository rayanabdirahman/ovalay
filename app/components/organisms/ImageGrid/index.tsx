import React from 'react'
import styled from 'styled-components/native'
import { Dimensions, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ProfileTabRouteName } from '../../../navigation/types';
import { ProductModel } from '../../../domain/interfaces';

type Props = {
  images: ProductModel[]
}

const { width } = Dimensions.get('window');

const ImageContainer = styled.TouchableOpacity`
  width: ${ props => (width-20)/4 }px; /** minus 20px layout padding from width */
  height: ${ props => (width-20)/4 }px; /** minus 20px layout padding from width */
  margin-bottom: 2px;
`

const Image = styled.Image`
  flex: 1;
  border-radius: 4px;
`

const ImageGrid = ({ images }: Props) => {
  const navigation = useNavigation();
  const renderItem = ({ item, index }: { item: ProductModel, index: number }) => {
    return (
      <ImageContainer
        onPress={() => navigation.navigate(ProfileTabRouteName.PRODUCT_SCREEN, { productId: item._id })}
        style={[index % 4 !==0 ? {paddingLeft: 2} : {paddingLeft: 0}]}>
        <Image source={{ uri: item.image[0] }} />
      </ImageContainer>
    )
  }

  return (
    <>  
      <FlatList
        horizontal={false}
        scrollEnabled={ images.length > 2 ? true : false }
        data={images}
        renderItem={renderItem}
        keyExtractor={(item: ProductModel) => item._id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={4}
      />
    </>
  )
}



export { ImageGrid }
