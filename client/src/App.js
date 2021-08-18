import React, {useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from  '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts());
    },[dispatch]); 


    return (
        <Router>
      <Navbar />
      <Switch>
        
      </Switch>
        <Container maxWidth="lg">
        <Grow in>
          <Container className="container">
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      <Footer/>
      </Router>
    )
}

export default App
