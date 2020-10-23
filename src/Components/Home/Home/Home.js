import React from 'react';
import Navbar from '../NavBar/Navbar';
import Receivable from '../Receivable/Receivable';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SideBar from '../../SharedComponents/SideBar.js';
import { Box } from '@material-ui/core';



// Material CSS
const useStyles = makeStyles((theme) => ({
 root: {
   flexGrow: 1,
 },
 paper: {
   padding: theme.spacing(2),
   textAlign: 'center',
   color: theme.palette.text.secondary,
 },
 nav__pos:{
  margin:'auto',
  padding:'8px'
 },
 side__pos:{
  textAlign:'center',
  padding:'5px'
 }
}));

const Home = () => {
 const classes = useStyles();
 return (
  
  
  
  <div className={classes.root} style={{padding:'10px'}}>

      <Grid container spacing={0}>

        <Grid item xs={12} sm={2} >
         <Grid  className={classes.nav__pos}>
          
           <Navbar />        
          
         </Grid>

          <Grid item xs={12} sm={12} className={classes.side__pos}>
           
            <SideBar  />
           
          </Grid>
         </Grid>      
        
        
        <Grid item xs={11} sm={10} style={{margin:"10px auto"}}>
         <Receivable/>
        </Grid>
        
      </Grid>
    </div>
  
   

  
 );
};

export default Home;