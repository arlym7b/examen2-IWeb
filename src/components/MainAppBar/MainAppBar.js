import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../common/Logo/Logo';
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Image from 'mui-image';
import { useNavigate } from 'react-router-dom';



const MainAppBar = ({ login }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [log, setLog] = useState(false);
  const [photo, setPhoto] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logIn = (token) => {
    axios.get("http://localhost:8000/logs/logIn/" + token.credential).then((response) => {
      setPhoto(response.data.foto);
      login(response.data.usuario);
      setLog(true);
    });
  };

  const LogButton = () => {
    if (log) {
      return <Image src={photo} height="50px" width="50px" />;
    } else {
      return (<GoogleLogin
        onSuccess={credentialResponse => {
          logIn(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />);
    }
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#28282a" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            V?? y Ve
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="Anuncios" onClick={handleCloseNavMenu}>
                <Link
                  sx={{
                    textAling: "center",
                    color: "black",
                  }}
                  onClick={() => navigate("/Anuncios")}
                  underline="none"
                >
                  Anuncios
                </Link>
              </MenuItem>
              <MenuItem key="Mis Viviendas" onClick={handleCloseNavMenu}>
                <Link
                  sx={{
                    textAling: "center",
                    color: "black",
                  }}
                  onClick={() => navigate("/Mis Viviendas")}
                  underline="none"
                >
                  Mis Viviendas
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            V?? y Ve
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key="Anuncios"
              onClick={() => navigate("/Anuncios")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Anuncios
            </Button>
            <Button
              key="Mis Viviendas"
              onClick={() => navigate("/Mis Viviendas")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Mis Viviendas
            </Button>
          </Box>
          <Tooltip title="Inicio de sesi??n">
            <LoginIcon sx={{ my: 2, color: 'white', display: { xs: 'flex', md: 'none' }, '&:hover': { color: "#F6358A" } }} />
          </Tooltip>
          <LogButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainAppBar;