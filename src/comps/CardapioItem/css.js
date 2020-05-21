import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles(theme => ({
  fullHeight: {
    minHeight: '100%'
  },
  itemBorder: {
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor:  theme.palette.primary.main,
    borderRadius: '50px',
    marginBottom: '3px'
  },
  textMargin: {
    marginBottom: 0,
    marginTop: '2px'
  }
}))

export default useStyle