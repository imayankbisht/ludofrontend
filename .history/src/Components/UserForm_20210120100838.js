import React ,{useState , useEffect} from 'react';
import {apiCall} from '../services/apiCall';
import {Container, Typography ,Grid ,TextField , makeStyles ,Button} from '@material-ui/core';
import "typeface-nunito";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
 
  typography: {
      fontFamily: [
        'Nunito',
        'serif',
      ].join(','),
  },
  
});

const useStyles = makeStyles((theme)=>({
     root:{
         '& .MuiTextField-root':{
           margin:theme.spacing(2),
           width:'50ch'
         },
         '& .MuiButtonBase-root':{
             marginLeft:'40px',
             width:'50ch',
             marginTop:theme.spacing(6)
         }
     }

}))


export default function UserForm(props){
    const {heading} = props;
    const [betAmount , setBetamount]=useState("");
    const [rakePercent , setRakepercent]=useState("");
    const [rakeCapAmount , setRakeCapAmount]=useState("");
    const classes = useStyles();

    const handleSubmit = (e) =>{
       e.preventDefault();
       const data ={
         bet:betAmount,
         rakePercent:rakePercent,
         rakeCap:rakeCapAmount
       }
       apiCall('post','https://ylrwt.sse.codesandbox.io/room/createroom',data);
       setRakeCapAmount("");
       setBetamount("");
       setRakepercent("");
    }
    return(
      <ThemeProvider theme={theme}>
            <Container  maxWidth="sm" className={classes.root}>
            <Typography component="div" style={{ backgroundColor: '#FFFFFF', height: '80vh' ,margin:'30px' }}>
            <Typography align="center" variant="h3" component="h2" gutterBottom>
                {heading}
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container>
                   <Grid item sm={12} md={12}>
                     <TextField
                        label="Bet Amount"
                        name="betAmount"
                        variant="outlined"
                        value={betAmount}
                        onChange={(e)=>{setBetamount(e.target.value)}}
                      />
                      <TextField
                        label="Rake Percent"
                        name="rakePercent"
                        variant="outlined"
                        value={rakePercent}
                        onChange={(e)=>{setRakepercent(e.target.value)}}
                      />
                      <TextField
                        label="Rake Cap Amount"
                        name="rakeCapAmount"
                        variant="outlined"
                        value={rakeCapAmount}
                        onChange={(e)=>{setRakeCapAmount(e.target.value)}}
                      />
                   </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                   Submit
                </Button>
            </form>
            </Typography>
            </Container>
            </ThemeProvider>
    )
}
