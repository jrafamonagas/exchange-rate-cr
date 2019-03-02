import { useContext, Context } from 'react'
import { ThemeContext } from '@emotion/core'

import { Theme } from '../config/theme'

export default function useTheme(): Theme {
  return useContext(ThemeContext as Context<Theme>)
}
