export type ColourProps = {
  black: string
  white: string
  blue: string
  grey: string
  lightgrey: string
}

export type ScreenLayoutProps = {
  fullwidth: string
  container: string
}

export type ThemeProps = {
  colour: ColourProps
  layout: ScreenLayoutProps
}

export const theme: ThemeProps = {
  colour: {
    black: '#2b292d',
    white: '#fff',
    blue: '#0046FF',
    grey: '#98A2AB',
    lightgrey: '#BFC5D2'
  },
  layout: {
    fullwidth: '0',
    container: '0 20px'
  }
}
