type ColourProps = {
  black: string
  white: string
  grey: string
}

type ThemeProps = {
  colour: ColourProps
}

export const theme: ThemeProps = {
  colour: {
    black: '#020311',
    white: '#FFF',
    grey: '#E5E5E5'
  }
}
