import React from 'react';
// import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const useRowStyles = makeStyles({
 root: {
   '& > *': {
     borderBottom: 'unset',
     background: "linear-gradient(90deg, pink 100%, cyan 10%)",
     
     
   },
 },
});


function Row(props) {
   const { row } = props;
   const [open, setOpen] = React.useState(false);
   const classes = useRowStyles();
 
   
 
   return (
     <React.Fragment>
       <TableRow className={classes.root}>
         <TableCell>
           <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
           </IconButton>
         </TableCell>
         <TableCell component="th" scope="row">
           {row.name}
         </TableCell>
         <TableCell align="right">{row.current_Bal}</TableCell>
         <TableCell align="right">{row.fat}</TableCell>
         <TableCell align="right">{row.carbs}</TableCell>
         <TableCell align="right">{row.protein}</TableCell>
       </TableRow>
       <TableRow>
         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
           <Collapse in={open} timeout="auto" unmountOnExit>
             <Box margin={1}>
               <Typography variant="h6" gutterBottom component="div">
                 History
               </Typography>
               <Table size="small" aria-label="purchases">
                 <TableHead>
                   <TableRow>
                     <TableCell>Date</TableCell>
                     <TableCell>Customer</TableCell>
                     <TableCell align="right">Amount</TableCell>
                     <TableCell align="right">Total price ($)</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {row.history.map((historyRow) => (
                     <TableRow key={historyRow.date}>
                       <TableCell component="th" scope="row">
                         {historyRow.date}
                       </TableCell>
                       <TableCell>{historyRow.customerId}</TableCell>
                       <TableCell align="right">{historyRow.amount}</TableCell>
                       <TableCell align="right">
                         {Math.round(historyRow.amount * row.price * 100) / 100}
                       </TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
             </Box>
           </Collapse>
         </TableCell>
       </TableRow>
     </React.Fragment>
   );
 }
export default Row;