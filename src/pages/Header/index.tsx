
import Logo from './../../components/Logo';
import HeaderContent from './HeaderContent';
import HeaderTools from './HeaderTools';

import Box from '@mui/material/Box';

const Home = () => {
  return (
      <Box display={'flex'} sx={{background: 'white', width: '100%'}} justifyContent="space-between">
        <Logo />
        <HeaderContent />
        <HeaderTools />        
      </Box>
  );
}

export default Home
