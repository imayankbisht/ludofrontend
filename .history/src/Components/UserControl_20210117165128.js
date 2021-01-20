import { Grid, Toolbar , InputBase ,Button ,makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
    borderSerach:{
        border:'2px solid #232323',
        borderRadius:'20px'
    }
}))

function UserControl(){
       const classes = useStyles();
     return(
         <div>
             <Toolbar>
                 <Grid container alignItems="center">
                     <Grid item>
                         <InputBase
                           className={classes.borderSerach}
                           placeholder="Room Name"
                           startAdornment={<SearchIcon fontSize="small"/>}
                         />
                     </Grid>
                     <Grid item sm></Grid>
                     <Grid item >
                         <Link to="create">
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