import * as React from 'react';
import './Login.css';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import  Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ColorButton from '../../components/Button/ButtonLogin'
import Title from '../../components/Title/Title'
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';

export default function Login() {
    const paperStyle = {flexWrap: 'wrap', padding: 20, height: '350px', width: 280, margin: "20px auto", background: '#fbeaff'}
    const avatarStyle = {background: '#005245'}
    return (
        <Grid>
            <header>
                <Title />
            </header>
            <Grid>
                <Paper id="loginBox" elevation={10} style={paperStyle}> 
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockPersonRoundedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <Grid>
                        <TextField id="username" label="Username" placeholder="Enter username" fullWidth required margin='normal' />
                        <TextField id="password" label="Password" type='password' placeholder="Enter password" fullWidth required />
                    </Grid>
                    <Grid align='center'>
                        <ColorButton variant='contained'> Sign In</ColorButton>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}
