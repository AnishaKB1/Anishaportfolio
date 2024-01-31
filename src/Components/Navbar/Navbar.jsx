import React from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import './Navbar.css';
import ANISHA  from './ANISHA.pdf';

const Navbar = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3', // Set your desired primary color
      },
      background: {
        default: '#ffffff', // Set your desired background color
      },
    },
  });

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: theme.palette.background.default, width: '100%', borderBottom: 'none', boxShadow: 'none' }}>
      
      
      <Toolbar disableGutters>
        
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, width: '100%' }}>

          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            style={{ color: 'black' }}
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
           
            
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <a
                  href={`mailto:anishakb4@gmail.com?subject=Hi, How can I help you?&body=Dear Anisha,`}
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  <EmailIcon
                    color="primary"
                    fontSize="large"
                    style={{ marginLeft: '15px', marginTop: '20px' }}
                  />
                </a>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">
                <Link to={'/'} style={{ color: 'gray', textDecoration: 'none', fontFamily: 'Lora, serif'}}>
                  Home
                </Link>
              </Typography>
            </MenuItem>



            <MenuItem>
              <Typography textAlign="center">
                <Link to={'/Skill'} style={{  color: 'gray', textDecoration: 'none',fontFamily: 'Lora, serif'}}>
                  Skill
                </Link>
              </Typography>
            </MenuItem>

            <MenuItem>
              <Typography textAlign="center">
                <Link to={'/Resume'} style={{  color: 'gray', textDecoration: 'none',fontFamily: 'Lora, serif' }}>
                  Resume
                </Link>
              </Typography>
            </MenuItem>

          </Menu>

        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left side */}
          <Box>
            <Typography textAlign="left"  className='anisha'>
              <h5  id='anisha' style={{  marginRight: '20px',color: 'gray',fontFamily: 'Lora, serif'}}>Anisha K B</h5>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', paddingRight: '15px' }}>
           

          <a
              href="mailto:anishakb4@gmail.com?subject=Hi, How can I help you?&body=Dear Anisha,"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'gray',
                
                  fontSize: 'large',
                  fontFamily: 'Lora, serif',
                  alignItems:'center',
                  justifyContent:'center',
                }}
              >
                <EmailIcon
                  color="dark"
                  fontSize="large"
                  style={{ marginLeft: '0px', marginTop: '1px' , alignItems:'center',
                  justifyContent:'center',}}
                />
              </Button>
            </a>

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'gray',
                display: 'block',
                fontSize: 'large',
              
                textTransform: 'capitalize',
                fontFamily: 'Lora, serif'
              }}
            >
              <Link to={'/'} style={{ color: 'gray', textDecoration: 'none',fontFamily: 'Lora, serif' }}>
                Home
              </Link>
            </Button>

           

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'gray',
                display: 'block',
                fontSize: 'large',
                textTransform: 'capitalize',
                fontFamily: 'Lora, serif',
              }}
            >
              <Link to={'/Skill'} style={{ color: 'gray', textDecoration: 'none',  fontFamily: 'Lora, serif' }}>
                Skill
              </Link>
            </Button>

            <Button
  id="ovalButton"
  onClick={handleCloseNavMenu}
  sx={{
    my: 2,
    display: 'block',
    fontSize: 'large',
    textTransform: 'capitalize',
    fontFamily: 'Lora, serif',
    color:'gray',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: 'gray',
      '& a': {
        color: 'white',
        
      },
    },
  }}
>
 
  <a
    href={ANISHA}
    download="ANISHA.pdf"
    id='resume'
    style={{
      color: 'gray',
      textDecoration: 'none',
      fontFamily: 'Lora, serif',
    }}
  >
    Resume
  </a>
</Button>


          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
