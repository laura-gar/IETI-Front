import * as React from 'react';
import './Login.css';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import  Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ColorButton from '../../components/Button/ButtonLogin'
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';

export default function Login() {
    const paperStyle = {flexWrap: 'wrap', padding: 20, height: '60vh', width: 280, margin: "20px auto", background: '#fbeaff'}
    const avatarStyle = {background: '#005245'}
    return (
        <Grid>
            <Paper id="loginBox" elevation={10} style={paperStyle}> 
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockPersonRoundedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <div>
                    <TextField id="username" label="Username" placeholder="Enter username" fullWidth required margin="normal" />
                </div>
                <div>
                    <TextField id="password" label="Password" type='password' placeholder="Enter password" fullWidth required margin="normal" />
                </div>
                <Grid align='center'>
                    <ColorButton variant='contained'> Sign In</ColorButton>
                </Grid>
            </Paper>
        </Grid>
    );
}
