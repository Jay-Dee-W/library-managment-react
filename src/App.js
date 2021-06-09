
import './App.css';
import { Container, AppBar, IconButton, Toolbar, Typography, Button, makeStyles, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from "@material-ui/core"
import { Book, Category, Menu, People } from "@material-ui/icons"
import { useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BooksList from './components/BooksList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {

  }
}))

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path='/'>
            Welcome to Library
          </Route>
          <Route exact path='/books'>
           <BooksList />
          </Route>
          <Route exact path='/categories'>
            List of categories
          </Route>
          <Route exact path='/members'>
            List of members
          </Route>
          <Route exact path='/issues'>
            List of Issued Books
          </Route>

        </Switch>
      </Wrapper>
    </Router>
  );

  function Wrapper(props) {
    const classes = useStyles()
    let [drawerOpen, setDrawerOpen] = useState(false)

    let toggleDrawer = () => setDrawerOpen(prev => !prev)

    return (
      <div className='container'>
        <CssBaseline />
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label="menu"
              onClick={toggleDrawer} >
              <Menu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              React Library
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>

        </AppBar>
        <>
          <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer}>
            <List>
              <Typography align='center' variant='h5'>Menu</Typography>
              <Box m={2} />
              {[
                { text: 'Books', icon: <Book />, link: "/books" },
                { text: 'Categories', icon: <Category />, link: "/catergory" },
                { text: 'Members', icon: <People />, link: '/members' },
                { text: 'Books Issued', icon: <Book />, link: '/issues' },
              ].map(({ text, icon,link }, index) => {
                return (
                  <Link to={link} onClick={toggleDrawer}>
                    <ListItem className={classes.list} button key={index}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                )
              })}
            </List>
          </Drawer>
        </>
        <Container fixed className={classes.paddedContainer} >
          {props.children}
        </Container>
      </div>
    )

  }

}


