import styled from 'styled-components/native'
import { Text as DefaultText } from 'react-native'

type Props = DefaultText['props']

const BaseText = styled.Text<Props>`
  font-size: 16px;
  font-weight: normal;
`

export const ScreenTitle = styled(BaseText)`
  font-size: 24px;
  margin-bottom: 32px;
  font-weight: bold;
`
