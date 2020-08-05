import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView, Image as DefaultImage, ScrollView } from 'react-native'
import { Text as DefaultText } from './Text'
import { Thumbnail } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

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

const StarImage = styled.Image<ImageProps>`
  width: 16px;
  height: 16px;
  margin-right: ${ props => props.small ? '8px' : '16px' }; 
`

export const FeedCard = ({
  images = [
    require('../assets/images/air-force-white.jpg'),
    require('../assets/images/air-max-orange.jpg'),
    require('../assets/images/jordan-1-red.jpg'),
    require('../assets/images/air-max.jpg'),
    require('../assets/images/nike-95.jpg')
  ],
  navigation
}: any) => {
  const imagesArr = (images.length <= 2) ? images : images.slice(0, 3);

  return (
    <React.Fragment>
      <Card>
        <Head>
          <DefaultView style={{ flexDirection: "row" }}>
            <Thumbnail small source={require('../assets/images/jd-sports-logo.png')} />
            <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
              <Text h2 m-0>JD Sport</Text>
              <SmallText light>2 new items from <SmallText bold light>JD Sport</SmallText></SmallText>
            </DefaultView>
          </DefaultView>
          <DefaultView>
            <SmallText light>2 mins</SmallText>
          </DefaultView>
        </Head>
        <Body>
          <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
            <Image source={require('../assets/images/vans.jpg')} resizeMode="cover" />
          </TouchableOpacity>
          
          
          <Image source={require('../assets/images/air-max.jpg')} resizeMode="cover" />
        </Body>
      </Card>
      <Card>
        <Head>
          <DefaultView style={{ flexDirection: "row" }}>
            <Thumbnail small source={require('../assets/images/male-1.jpg')} />
            <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
              <Text h2 m-0>Jamie Greenwood</Text>
              <SmallText light>Bought 5 items from <SmallText bold light>FootLocker</SmallText></SmallText>
            </DefaultView>
          </DefaultView>
          <DefaultView>
            <SmallText light>1 hour</SmallText>
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
      
      <Card>
        <Head>
          <DefaultView style={{ flexDirection: "row" }}>
            <Thumbnail small source={require('../assets/images/female-1.jpg')} />
            <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
              <Text h2 m-0>Jane Brown</Text>
              <SmallText light>Left a review for <SmallText bold light>Nike</SmallText></SmallText>
            </DefaultView>
          </DefaultView>
          <DefaultView>
            <SmallText light>2 hour</SmallText>
          </DefaultView>
        </Head>
        <Body style={{ flexDirection: "column" }}>
          <DefaultView style={{ flexDirection: "row", marginBottom: 8 }}>
            {
              [
                require('../assets/icons/star-filled.png'),
                require('../assets/icons/star-filled.png'),
                require('../assets/icons/star-filled.png'),
                require('../assets/icons/star-filled.png'),
                require('../assets/icons/star.png'),
              ].map((image, index ) => {
                  return <StarImage key={`review-star--${index}`} small source={image} resizeMode="contain" /> 
              })
            }
          </DefaultView>

          <DefaultView style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <DefaultView style={{ maxWidth: 250 }}>
              <Text>Extremely comfortable couldn't recommend them enough</Text>
            </DefaultView>
            <Image small source={require('../assets/images/fila.jpg')} resizeMode="cover" />
          </DefaultView>
        </Body>
      </Card>
      
      <Card>
        <Head>
          <DefaultView style={{ flexDirection: "row" }}>
            <Thumbnail small source={require('../assets/images/male-2.jpg')} />
            <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
              <Text h2 m-0>Justin Robinson</Text>
              <SmallText light>Bought 2 items from <SmallText bold light>JD Sport</SmallText></SmallText>
            </DefaultView>
          </DefaultView>
          <DefaultView>
            <SmallText light>2 hour</SmallText>
          </DefaultView>
        </Head>
        <Body>
          <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            {
              [
                require('../assets/images/nike-95.jpg'),
                require('../assets/images/yeezy.jpg'),
                require('../assets/images/vans.jpg'),
              ].map((image, index, arr) => {
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