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
    height:'450px'
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
            <Container maxWidth="sm" className={classes.paper}>
            <Typography component="div" style={{ backgroundColor: '#FFFFFF', height: '80vh' ,margin:'30px' }}>
            <Typography align="center" variant="h3" component="h2" gutterBottom>
                EDIT FORM
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container>
                   <Grid item sm={12}>
                     <TextField
                        label="Bet Amount"
                        name="betAmount"
                        variant="outlined"
                        style={{width:'400px',marginLeft:'40px'}}
                        value={bet}
                        onChange={(e)=>SetBet(+e.target.value)}
                      />
                      <TextField
                        label="Rake Percent"
                        name="rakePercent"
                        variant="outlined"
                        style={{width:'400px',marginLeft:'40px'}}
                        value={rakePercent}
                        onChange={(e)=>SetrakePercent(+e.target.value)}
                      />
                      <TextField
                        label="Rake Cap Amount"
                        name="rakeCapAmount"
                        variant="outlined"
                        style={{width:'400px',marginLeft:'40px'}}
                        value={rakeCap}
                        onChange={(e)=>SetrakeCap(+e.target.value)}
                      />
                   </Grid>
                </Grid>
               
            </form>
            </Typography>
            </Container>
            </ThemeProvider>
    )
}

export default EditForm;