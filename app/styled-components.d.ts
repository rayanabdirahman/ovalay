import { theme } from './components/Theme'

// extend default styled component theme to accept strong typed properties
type Theme = typeof theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
