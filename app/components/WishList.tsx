import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView, Image as DefaultImage, ScrollView, TouchableOpacity } from 'react-native'
import { Text as DefaultText } from './Text'
import { Thumbnail } from 'native-base'

export type ViewProps = DefaultView['props'] & {}

export type ImageProps = DefaultImage['props'] & {
  small?: boolean
}

const Text = styled(DefaultText)`
  margin-bottom: 4px;
`

const SmallText = styled(DefaultText)`
  font-size: 15px;
`

const Card = styled.View<ViewProps>`
  /* background-color: red; */
  margin-bottom: 24px;
`

const Head = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`

const Body = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 24px;
`

const Image = styled.Image<ImageProps>`
  width: ${ props => props.small ? '64px' : '140px' };
  height: ${ props => props.small ? '64px' : '140px' };
  margin-right: ${ props => props.small ? '8px' : '16px' }; 
  border-radius: 8px;
`

export const WishList = ({ 
  images = [
  require('../assets/images/air-force-white.jpg'),
  require('../assets/images/air-max-orange.jpg'),
  require('../assets/images/jordan-1-red.jpg'),
  require('../assets/images/air-max.jpg'),
  require('../assets/images/nike-95.jpg')
  ],
  navigation
  }: any) => {
    // const imagesArr = (images.length <= 2) ? images : images.slice(0, 3);

    return (
      <React.Fragment>
        <Card>
          <Head>
            <DefaultView style={{ flexDirection: "row", alignItems: "center" }}>
              <Thumbnail small source={require('../assets/images/jd-sports-logo.png')} />
              <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
                <Text h2 m-0>JD Sport</Text>
              </DefaultView>
            </DefaultView>
          </Head>
          <Body>
            <Image source={require('../assets/images/vans.jpg')} resizeMode="cover" />
            <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
              <Image source={require('../assets/images/air-max.jpg')} resizeMode="cover" />
            </TouchableOpacity>
          </Body>
        </Card>
        <Card>
          <Head>
            <DefaultView style={{ flexDirection: "row", alignItems: "center" }}>
              <Thumbnail small source={require('../assets/images/north-face-logo.png')} />
              <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
                <Text h2 m-0>The North Face</Text>
              </DefaultView>
            </DefaultView>
          </Head>
          <Body>
            <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
              {
                images.map((image, index, arr) => {
                  return (arr.length > 2) ? 
                    <Image key={`product-image--${index}`} small source={image} resizeMode="cover" /> :
                    <Image key={`product-image--${index}`} source={image} resizeMode="cover" />
                })
              }
              </ScrollView>
          </Body>
        </Card>
      </React.Fragment>
    )
}