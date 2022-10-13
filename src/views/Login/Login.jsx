import React, { useContext } from "react";
import "./Login.css";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import ColorButton from "../../components/Button/ButtonLogin";
import Title from "../../components/Title/Title";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import useLogin from "./hooks/useLogin";
import { ThemeContext } from "../../ThemeContext";

export default function Login() {
  const { state } = useContext(ThemeContext);
  const avatarStyle = { background: "#005245" };
  const { email, setEmail, password, setPassword, sendLoginRequest } =
    useLogin();

  let paperStyle = {
    flexWrap: "wrap",
    padding: 20,
    height: "350px",
    width: 280,
    margin: "20px auto",
    background: "#fbeaff",
  };

  if (state.isDarkMode) {
    paperStyle = {
      color: "white",
      flexWrap: "wrap",
      padding: 20,
      height: "350px",
      width: 280,
      margin: "20px auto",
      background: "#575068",
    };
  }

  return (
    <Grid className={`loginContainer-${state.isDarkMode ? "dark" : "light"}`}>
      <header>
        <Title />
      </header>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockPersonRoundedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Grid>
            <TextField
              id="email"
              label="Email"
              placeholder="Enter email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              fullWidth
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid align="center">
            <ColorButton variant="contained" onClick={() => sendLoginRequest()}>
              Sign In
            </ColorButton>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
