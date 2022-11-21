import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Box';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Typography } from '@mui/material';

const HeaderContent = () => {
 return (
     <Box display={'flex'} alignItems={'center'}>
        <Button>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <LocationOnOutlinedIcon fontSize="large" color="primary" />
                <Typography mt={1} color="primary" fontWeight={'bold'}>Map</Typography>
            </Box>
        </Button>
        <Button>
            <Box sx={{display: 'flex', flexDirection: 'row'}} px={5}>
                <DescriptionOutlinedIcon fontSize="large" color="primary" />
                <Typography mt={1} color="primary" fontWeight={'bold'}>Reports</Typography>
            </Box>
        </Button>
        <Button>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <LocationOnOutlinedIcon fontSize="large" color="primary" />
                <Typography mt={1} color="primary" fontWeight={'bold'}>Dashboard</Typography>
            </Box>
        </Button>
      </Box>
 );
}

export default HeaderContent
