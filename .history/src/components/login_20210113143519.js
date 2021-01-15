import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from '../';
const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const sendLoginData = () => {
        // e.preventDefault();
        const headers = {
          "content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        };
        // console.log(email,password);
        const userData = {
          email: email,
          password: password,
        };
        axios.post("/api/auth/login/", userData, { headers })
         
          .then((response) => {
            console.log(" login Success ===>", response.data);

          })
          .catch((error) => {
            console.log("Error ===>", error);
          });
        
      };
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                     <Button
                  type="primary"
                  htmlType="submit"
                  onClick={(e) => {
                   sendLoginData(e);
                  }}
                >
                  SIGN IN
                </Button>
                </Grid>
                <TextField label='Email' placeholder='Enter email' type='email'  fullWidth required/>
                <TextField label='Password' placeholder='Enter password'  type='password'  fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login