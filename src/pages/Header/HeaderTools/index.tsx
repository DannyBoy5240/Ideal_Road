import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import Log_Avatar from './../../../assets/images/avatar.jpg';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const HeaderTools = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(setAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
     <Box display={'flex'} alignItems={'right'}>
        <Button>
          <NotificationsNoneRoundedIcon fontSize="large" color="primary" />
        </Button>
        <Button>
          <SettingsRoundedIcon fontSize="large" color="primary" />
        </Button>
        <Button 
          aria-controls={open? 'fade-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open? 'true' : undefined}
          onClick={handleClick}>

          <Box display={'flex'} alignItems={'center'}>
            <img src={Log_Avatar} />
            <KeyboardArrowDown sx={{color: 'black'}} fontSize={'large'} />
          </Box>
        </Button>
     </Box>
  );
}

export default HeaderTools
