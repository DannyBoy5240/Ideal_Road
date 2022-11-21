import * as React from 'react';

import Box from '@mui/material/Box';
import Logo from './../../assets/images/logo.jpg';

const HeaderTools = () => {
 return (
    <Box display={'flex'} alignItems={'right'} mt={1} ml={3}>
        <img src={Logo} width='100%' height='90%' />
    </Box>
 );
}

export default HeaderTools
