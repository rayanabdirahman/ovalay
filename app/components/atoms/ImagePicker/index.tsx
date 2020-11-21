import { AntDesign } from '@expo/vector-icons'
import * as DefaultImagePicker from 'expo-image-picker'
import { Image, TouchableOpacity as DefaultTouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import * as React from 'react'

type Props = DefaultTouchableOpacity['props'] & {
  selectedImage(image: string): void
}

const ImagePickerStyles = styled.TouchableOpacity<Props>`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colour.grey };
  justify-content: center;
  align-items: center;
`

export default function ImagePicker(props: Props) {
  const [image, setImage] = React.useState<string>('')
  const pickImage = async () => {
    const result = await DefaultImagePicker.launchImageLibraryAsync({
      mediaTypes: DefaultImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    // set selected image uri to image state
    if (!result.cancelled) {
      setImage(result.uri);
      // call selectedImage prop to pass image data to parent component
      props.selectedImage(result.uri)
    }
  }

  return (
    <ImagePickerStyles {...props} onPress={pickImage}>
      { image ? <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} /> : 
        <AntDesign name="plus" size={32} color={'#BFC5D2'} />
      }
    </ImagePickerStyles>
  )
}
