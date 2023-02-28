import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink, useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getUser } from "../feature/authSlice/authSlice";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formTarget = new FormData(e.target);
    // console.log(formTarget);

    const form = {
      email: formTarget.get("email"),
      password: formTarget.get("password"),
    };

    console.log(form);

    console.log(process.env.REACT_APP_API_URL);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/sign-in`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          data: form,
        }),
      }
    );

    const data = await response.json();

    alert(data.msg);

    const token = data.token;
    const user = data.user;

    console.log(token);

    if (response.ok) {
      Cookies.set("token", token);

      dispatch(getUser(user));
      navigate("/");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        color: "black",
        background: "white",
        borderRadius: "2rem",
        paddingBottom: "10px",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/register" style={{ color: "grey" }}>
                Don't have an account? Register now
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
