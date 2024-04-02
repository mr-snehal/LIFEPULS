import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

const useStyles = {
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:'80vw',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    marginBottom: 16,
  },
  image: {
    marginLeft: '15px',
  },
};

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getposts());
  }, [dispatch]);
  return (
    <Container maxWidth="xlg">
      <AppBar style={useStyles.appBar} position="static" color='inherit'>
        <Typography style={useStyles.heading} variant="h2" align="center" color="textPrimary">Memories</Typography>
        <img style={useStyles.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
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
  );
}

export default App;
