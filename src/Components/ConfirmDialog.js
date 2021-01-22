import { Dialog,IconButton, DialogActions ,DialogTitle, DialogContent, Button ,Typography,makeStyles } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles(theme =>({
    dialog:{
        position:'absolute',
        padding:theme.spacing(2),
        top:theme.spacing(7)
    },
    dialogTitle:{
        textAlign:'center'
    },
    dialogContent:{
        textAlign:'center'
    },
    dialogAction:{
        justifyContent:'center'
    },
    titleIcon:{
        backgroundColor:theme.palette.secondary.light,
        color:theme.palette.secondary.main,
        '&:hover':{
            backgroundColor:theme.palette.secondary.light,
            cursor:'default'
        },
        '& .MuiSvgIcon-root':{
            fontSize:'10rem'
        }
    }
}))

export default function ConfirmDialog(props){
    const {confirmDialog ,setConfirmDialog } = props;
    const classes = useStyles();
    return(
        <Dialog open={confirmDialog.isOpen} classes={{paper:classes.dialog}}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                   <HelpOutlineIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6" >
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
               <Button 
                variant="contained"
                startIcon={<DeleteIcon/>} 
               color="secondary"
               onClick={confirmDialog.onConfirm}
               >Yes</Button>
               <Button 
               onClick={()=>setConfirmDialog({...confirmDialog ,isOpen:false})}
               variant="contained"
                color="primary">No</Button>
            </DialogActions>
        </Dialog>
    )
}