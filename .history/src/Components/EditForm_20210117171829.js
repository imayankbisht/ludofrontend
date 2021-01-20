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


    function EditForm(props){
    const classes = useStyles();
    const [bet , SetBet]=useState("");
    const [rakePercent , SetrakePercent]=useState("");
    const [rakeCap , SetrakeCap]=useState("");

    useEffect(async()=>{
       const result = await apiCall('get',`https://ylrwt.sse.codesandbox.io/room/edit/${props.match.params.id}`);
       SetBet(result.loadRoom[0].bet);
       SetrakeCap(result.loadRoom[0].rakeCap);
       SetrakePercent(result.loadRoom[0].rakePercent);
    },[]);

    const handleSubmit = (e) =>{
       e.preventDefault();
        const data ={bet,rakeCap ,rakePercent};
        console.log(data);
        apiCall('put',`https://ylrwt.sse.codesandbox.io/room/edit/${props.match.params.id}`,data);
    }
    return(
      <ThemeProvider theme={theme}>
            <Container maxWidth="sm" className={classes.root}>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh' ,margin:'30px' ,border:'1px solid black'}}>
            <Typography align="center" variant="h3" component="h2" gutterBottom>
                Edit Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container>
                   <Grid item sm={12}>
                     <TextField
                        label="Bet Amount"
                        name="betAmount"
                        variant="outlined"
                        value={bet}
                        onChange={(e)=>SetBet(+e.target.value)}
                      />
                      <TextField
                        label="Rake Percent"
                        name="rakePercent"
                        variant="outlined"
                        value={rakePercent}
                        onChange={(e)=>SetrakePercent(+e.target.value)}
                      />
                      <TextField
                        label="Rake Cap Amount"
                        name="rakeCapAmount"
                        variant="outlined"
                        value={rakeCap}
                        onChange={(e)=>SetrakeCap(+e.target.value)}
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

export default EditForm;