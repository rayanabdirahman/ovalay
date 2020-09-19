import styled from 'styled-components/native'
import { Text as DefaultText } from 'react-native'

type Props = DefaultText['props'] & {
  light?: boolean
}

const BaseText = styled.Text<Props>`
  font-size: 16px;
  font-weight: 400;
  color: ${ ({ theme }) => theme.colour.black };
`

export const ScreenTitle = styled(BaseText)`
  font-size: 24px;
  margin-bottom: 32px;
  font-weight: 700;
`
export const Text = styled(BaseText)`
  font-size: 16px;
  margin-bottom: 4px;
  font-weight: ${ ({ bold }) => bold ? 700 : 400 };
  color: ${ ({ light, theme }) => light ? theme.colour.lightgrey : theme.colour.black };
`