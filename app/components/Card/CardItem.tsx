import React from 'react'
import { View as DefaultView, FlatList } from 'react-native'
import { Thumbnail } from 'native-base'
import { CardHeaderText, SmallText } from '../Text'
import { Image } from '../Image'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CardItem = ({ data }: any) => {
  const renderItem = ({ item }: any) => (<Image small={(data.product.length > 2) ? true : false} source={item.photo} resizeMode="cover" />)
  return (
    <DefaultView style={{ marginBottom: 24 }}>
      {/* Head */}
      <DefaultView style={{ marginBottom: 16, flexDirection: "row", justifyContent: "space-between" }}>
        <DefaultView style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => alert('profile')}>
            <Thumbnail small source={data.photo} />
          </TouchableOpacity>
          <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
            <CardHeaderText h2 m-0>{data.name}</CardHeaderText>
            <SmallText light> 
              { (data.role === "seller") ? ` Realsed ${data.product.length} new items` : `Bought ${data.product.length} items` }
            </SmallText>
          </DefaultView>
        </DefaultView>
        <DefaultView style={{ alignItems: "center", justifyContent: "center" }}>
          <SmallText light>2 mins</SmallText>
        </DefaultView>
      </DefaultView>
      {/* Head */}

      {/*Body */}
      <DefaultView style={{ flexDirection: "row", marginLeft: 24 }}>
        <FlatList
          horizontal={true}
          scrollEnabled={ data.product.length > 2 ? true : false }
          data={data.product}
          renderItem={renderItem}
          keyExtractor={(item: any) => item._id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </DefaultView>
      {/*Body */}
    </DefaultView>
  )
}

