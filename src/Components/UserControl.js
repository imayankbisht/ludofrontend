import { Grid, Toolbar ,Button ,makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles(theme =>({
    searchInput:{
        padding:`0px ${theme.spacing(2)}px`,
        fontSize:'1rem',
        '& .MuiSvgIcon-root':{
           marginRight:theme.spacing(2)
        }
    },
    
}))

function UserControl(){
       const classes = useStyles();
     return(
         <div>
             <Toolbar style={{ background: '#FFFFFF'}}>
                 <Grid container alignItems="center">
                     <Grid item>
                         
                     </Grid>
                     <Grid item sm></Grid>
                     <Grid item >
                         <Link style={{ textDecoration:'none'}} to="create">
                            <Button variant="contained" color="primary">
                                Create Room
                            </Button>
                         </Link>
                     </Grid>
                 </Grid>
             </Toolbar>
         </div>
     );
}

export default UserControl;