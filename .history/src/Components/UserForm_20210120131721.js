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
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'150px'
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  body: {
    backgroundColor: "#F7F9FC"
  },
    

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
            <Container  maxWidth="sm" className={classes.paper}>
            <Typography component="div" style={{ backgroundColor: '#FFFFFF', height: '80vh' ,margin:'30px' }}>
            <Typography align="center" variant="h3" component="h2" gutterBottom>
                {heading}
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} >
                <Grid container spacing={3}>
                   <Grid item sm={4} md={12}>
                     <TextField
                     
                        label="Bet Amount"
                        name="betAmount"
                        variant="outlined"
                        style={{width:'400px',marginLeft:'40px'}}
                        value={betAmount}
                        onChange={(e)=>{setBetamount(e.target.value)}}
                      />
                        </Grid>
                        <Grid item sm={4} md={12}> 
                      <TextField
                        label="Rake Percent"
                        name="rakePercent"
                        variant="outlined"
                        style={{width:'400px',marginLeft:'40px'}}

                        value={rakePercent}
                        onChange={(e)=>{setRakepercent(e.target.value)}}
                      />
                        </Grid>
                        <Grid item sm={4} md={12}> 
                      <TextField
                        label="Rake Cap Amount"
                        name="rakeCapAmount"
                        variant="outlined"
                        style={{width:'400px',marginLeft:'40px'}}

                        value={rakeCapAmount}
                        onChange={(e)=>{setRakeCapAmount(e.target.value)}}
                      />
                   </Grid>
                   <Button type="submit" variant="contained"  color="primary"
                   style={{width:'400px',marginLeft:'50px'}}>
                   Submit
                </Button>
                </Grid>
                
            </form>
            </Typography>
            </Container>
            </ThemeProvider>
    )
}
