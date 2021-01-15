import React,{useState} from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from '../axios';
import Dashboard from '.'
const Login = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
    const sendLoginData = () => {
        // e.preventDefault();
        const headers = {
            "content-type": "application/json"
           
        };
        // console.log(email,password);
        const userData = {
            email: email,
            password: password,
        };
        axios.post("/user/login", userData, { headers })

            .then((response) => {
                console.log(" login Success ===>", response.data);

            })
            .catch((error) => {
                console.log("Error ===>", error);
            });

        setEmail("");
        setPassword("");
    };
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' type='email' value={email} onChange={e => setEmail(e.target.value)} fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' value={password} onChange={e => setPassword(e.target.value)} fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle}
                    onClick={(e) => {
                        sendLoginData(e);
                       
                    }} fullWidth>Sign in</Button>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login