import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SliderPrice from '../Slider/SliderPrice';

const BarraFiltros = () => {

  return (
    <Box sx={{ flexGrow: 1 , m:1 , borderRadius: '50%'}} >
    <AppBar position="static" sx ={{backgroundColor: "#28282a"}} >
      <Toolbar>
        
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Filtrar por
        </Typography>
        
         <SliderPrice/>
         
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default BarraFiltros
