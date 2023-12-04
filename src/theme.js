import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, deepOrange, cyan, orange } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[700],
          secondary: deepOrange[100]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: cyan[300],
          secondary: orange[100]
        }
      }
    }
  }
  // ...other properties
})

export default theme