import styled from 'styled-components/native'
import { Text as DefaultText } from 'react-native'

export type TextProps = DefaultText['props'] & {
  h1?: boolean
  h2?: boolean
  light?: boolean
  bold?: boolean
}

export const Text = styled.Text<TextProps>`
  font-size: ${ props => props.h1 ? '24px' : '16px' };
  color: ${ props => props.light ? props.theme.colour.grey : props.theme.colour.black };
  font-weight: ${ props => (props.h1 || props.h2 || props.bold) ? 'bold' : 'normal' };
  margin-bottom: ${ props => props.h1 ? '32px' : '8px' };
`

export const CardHeaderText = styled(Text)`
  margin-bottom: 4px;
`

export const SmallText = styled(Text)`
  font-size: 15px;
`
