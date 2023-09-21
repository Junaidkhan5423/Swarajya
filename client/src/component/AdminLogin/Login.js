import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Admin.css'
import { AdminLoginService, AdminSingService } from '../services/student.service';
import {  useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../store/store';




function Copyright(props) {



  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [signUp ,setSingUp]= React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false);

const navigate = useNavigate()

const setAuthentication = useAuthentication(state => state.setAuthentication)

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // setIsLoading(true)
   const Admin = await AdminLoginService({
    email: data.get('email'),
    password: data.get('password'),
  })
    if(Admin.status === 201){
      const Storedata = JSON.stringify(Admin.data);
      localStorage.setItem('userData', Storedata);
    
    setAuthentication({name:Admin?.name,token:Admin?.token})
      navigate("/table")
    }else{
      console.log();
      alert(Admin.error.response.data.message)
    }
 
  
  };
  
  const handleSubmitForSignUp = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   await AdminSingService({
    name: data.get('name'),
    email: data.get('email'),
    password: data.get('password'),
  })
setSingUp(false)  
  };
  if(isLoading){
    return (
      <button class="btn btn-primary d-flex justify-content-center align-items-center position-absolute top-50 start-50">
      <span class="spinner-border spinner-border-sm me-2"></span>
      Loading...
    </button>
    
    )
  }

  return (
    <>
   { signUp ? ( 
    <div className='login-1'>
        <div className='login-2'>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Sing up for Admin
          </Typography>
          <Box component="form" onSubmit={handleSubmitForSignUp} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
            className='junaid'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            
            >
              Sign  UP
            </Button>
            <Grid container>
              <Grid item xs>
                
                <Link onClick={()=> setSingUp(false)} marginLeft={"6px"} variant="body2">
                  LOGIN
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
    </div>) :( 
    <div className='login-1'>
        <div className='login-2'>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Admin Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
            className='junaid'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                <Link onClick={()=> setSingUp(true)} marginLeft={"106px"}  variant="body2">
                  Create Account
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
    </div>)}
    </>
  );
}
