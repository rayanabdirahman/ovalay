import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native'

// The useColorScheme value is always either light or dark
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>
}
