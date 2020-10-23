import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
 root: {
   flexGrow: 1,
 },
 paper: {
   padding: theme.spacing(1),
   textAlign: 'center',
   color: "linear-gradient(100deg,gray,cyan,white,pink)",
   background: 'linear-gradient(100deg,gray,cyan,white,pink)',
   fontFamily: "'MuseoModerno', cursive",
   fontWeight:'bold',
   fontSize:'1.5rem',
   

 },
}));

const Navbar = () => {
 const classes = useStyles();
 return (
  <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper} >My Daily Task</Paper>
        </Grid>
        
      </Grid>
    </div>
 );
};

export default Navbar;