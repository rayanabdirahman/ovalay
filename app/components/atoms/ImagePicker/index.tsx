import * as DefaultImagePicker from 'expo-image-picker'
import { Platform, Text, TouchableOpacity } from 'react-native'
import * as React from 'react'

export default function ImagePicker(props: any) {
  const [image, setImage] = React.useState(null)
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await DefaultImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await DefaultImagePicker.launchImageLibraryAsync({
      mediaTypes: DefaultImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }

    props.onSelectedImage(image)
  }

  return (
    <TouchableOpacity onPress={pickImage}>
      <Text>Pick an image from camera roll</Text>
    </TouchableOpacity>
  )
}
