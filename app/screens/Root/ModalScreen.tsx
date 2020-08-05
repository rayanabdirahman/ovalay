import * as React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'
import { RootNavigatorScreenName } from '../../navigation/ScreenNames'

export const ModalScreen = ({ route }: StackScreenProps<RootStackParamList, RootNavigatorScreenName.MODAL>) => {
  const component = route.params?.component ?? null
  return (
    <React.Fragment>
      {component}
    </React.Fragment>
  );
}