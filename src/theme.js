import { createMuiTheme } from '@material-ui/core/styles'
import brown from '@material-ui/core/colors/brown'
import pink from '@material-ui/core/colors/pink'

const hood = brown['500']
const wall = pink['200']

const theme = createMuiTheme({
  palette: {
    common: {
      hood,
      wall
    },
    primary: {
      main: hood
    },
    secondary: {
      main: wall
    }
  }
})

export default theme