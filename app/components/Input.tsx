import styled from 'styled-components/native'
import { TextInput as DefaultTextInput } from 'react-native'

type InputProps = DefaultTextInput['props']

export const Input = styled.TextInput<InputProps>`
  border: 1px solid ${props => props.theme.colour.lightgrey};
  border-radius: 8px;
  padding: 20px 16px;
  margin-bottom: 24px;
`