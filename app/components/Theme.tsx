type ColourProps = {
  black: string
  white: string
  grey: string
  red: string
}

type FontProps = {
  regular: string
  bold: string
  black: string
}

type ThemeProps = {
  colour: ColourProps,
  font: FontProps
}

export const theme: ThemeProps = {
  colour: {
    black: '#020311',
    white: '#FFF',
    grey: '#E5E5E5',
    red: '#EA2740'
  },
  font: {
    regular: 'Inter_400Regular',
    bold: 'Inter_600SemiBold',
    black: 'Inter_900Black'
  }
}
