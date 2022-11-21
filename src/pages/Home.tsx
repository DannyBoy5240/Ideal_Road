import { Box } from '@mui/material';

import Header from './Header'
import ToolBar from './ToolBar';
import Content from './Content';

const Home = () => {
  return (
    <Box sx={{background : '#e9eef2'}}>
      <Header />
      <Box p={2}>
        <ToolBar />
        <Content />
      </Box>
    </Box>
  );
}

export default Home