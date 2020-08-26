import 'styled-components'

enum Colour {
  BLACK = '#2B292D',
  WHITE = '#fff',
  LIGHT_GREY = '#BFC5D2'
}

type ColoursProps = {
  black: string
  white: string
  lightgrey: string
}

export type ThemeProps = {
  colour: ColoursProps
}

export const theme: ThemeProps = {
  colour: {
    black: Colour.BLACK,
    white: Colour.WHITE,
    lightgrey: Colour.LIGHT_GREY
  }
}

// extend default theme to accept custom theme properties
type Theme = typeof theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}