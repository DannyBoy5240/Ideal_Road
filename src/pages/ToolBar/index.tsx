import * as React from 'react';

import Box from '@mui/material/Box';
import ToolCreate from './ToolCreate';
import ContentFilter from './ContentFilter';

const ToolBar = () => {

   return (
     <Box>
        <ToolCreate />
        <ContentFilter />
     </Box>
   )

}

export default ToolBar
