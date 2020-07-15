type ColourProps = {
  black: string
  white: string
  blue: string
  grey: string
  lightgrey: string
}

type FontWeightProps = {
  bold: string
  regular: string
}

type ScreenLayoutProps = {
  fullwidth: string
  container: string
}

export type ThemeProps = {
  colour: ColourProps
  fontweight: FontWeightProps
  layout: ScreenLayoutProps
}

export const theme: ThemeProps = {
  colour: {
    black: '#2b292d',
    white: '#fff',
    blue: '#1732FF',
    grey: '#98A2AB',
    lightgrey: '#BFC5D2'
  },
  fontweight: {
    bold: '500',
    regular: '400'
  },
  layout: {
    fullwidth: '0',
    container: '0 20px'
  }
}
