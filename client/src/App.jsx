import { CssBaseline, Container, Grid, AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import PenIcon from '@material-ui/icons/Create'
import { Route, Routes } from "react-router-dom";
import Post from "./Pages/Post";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  container: {
    maerginTop: theme.spacing(3)
  }
}))

const App = () => {
  const styles = useStyles()
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar >
            <IconButton edge="start" className={styles.container} color="inherit" />
            <Typography color="secondary" variant="h6" className={styles.title}>
              <a href="http://localhost:5173/">Blogist</a>
            </Typography>
            <Button variant="outlined" color="primary" startIcon={<PenIcon />}>
              New Text
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container className={styles.container}>
          <Grid item xs={12}>
            <Routes>
              <Route path="/posts" element={<Post/>}/>
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default App