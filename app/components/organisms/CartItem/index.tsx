import React from 'react'
import styled from 'styled-components/native'
import { Thumbnail } from 'native-base'
import { View as DefaultView, Dimensions, FlatList } from 'react-native'
import { Text } from '../../atoms/Text'
import { Image } from '../../atoms/Image'
import { Button } from '../../atoms/Button'
import { CardItem } from '../CardItem'
import { Data } from '../../../types'

// type Props = {
//   data: [
//     _id: string,
//     store: [
//       {
//         _id: string,
//         username: string,
//         avatar: string
//       }
//     ], 
//     products:[
//       {
//         _id: string,
//         image: string
//       }
//     ] 
//   ]
// }



// type Props = {
//   data: Data[]
// }

type Props = {
  data: Data[]
}

// const UserContainer = styled.View`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 16px;
//   /* flex: .5; */
// `

// const CartItem = ({ images }: Props) => {
//   const renderItem = ({ item, index }: any) => {
//     return (
//       <ImageContainer
//         onPress={() => alert(`Image: ${item._id} clicked`)}
//         style={[index % 4 !==0 ? {paddingLeft: 2} : {paddingLeft: 0}]}>
//         <Image source={{ uri: item.image }} />
//       </ImageContainer>
//     )
//   }

//   return (
//     <>  
//       <FlatList
//         horizontal={false}
//         scrollEnabled={ images.length > 2 ? true : false }
//         data={images}
//         renderItem={renderItem}
//         keyExtractor={(item: any) => item._id}
//         showsVerticalScrollIndicator={false}
//         showsHorizontalScrollIndicator={false}
//         numColumns={4}
//       />
//     </>
//   )
// }

const CartItem: React.FunctionComponent<Props>= ({ data }) => {
  // console.log('DATA: ', data)
  const renderItem = ({item}: any) => {
    // console.log('ITEM: ', array)
    // return (
    //   <DefaultView>
    //     <Image small={(index > 2) ? true : false} source={{ uri: item.image }} resizeMode="cover"/>
    //   </DefaultView>
    // )
    return <CardItem data={item} />
  }

  // const renderItem = ({ item, index }: any) => {
  //   return (
  //     <DefaultView>
  //       <UserContainer>
  //         <Thumbnail style={{ marginRight: 8 }} source={{ uri: item.store.avatar }} />
  //         <DefaultView style={{ flexDirection: "column" }}>
  //           <Text  bold style={{ marginBottom: 4 }}>{ item.store.username }</Text>
  //           <Text  style={{ marginBottom: 0 }}>{ item.products.length } items in basket</Text>
  //         </DefaultView>
  //       </UserContainer>
  //       <FlatList
  //         horizontal={true}
  //         scrollEnabled={ item.products.length > 2 ? true : false }
  //         data={item.products}
  //         renderItem={renderProducts}
  //         keyExtractor={(item: any) => item._id}
  //         showsVerticalScrollIndicator={false}
  //         showsHorizontalScrollIndicator={false}
  //       />
  //     </DefaultView>
  //   )
  // }

  return (
    <>  
      <FlatList
        horizontal={false}
        scrollEnabled={ data.length > 2 ? true : false }
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item._id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}



export { CartItem }
