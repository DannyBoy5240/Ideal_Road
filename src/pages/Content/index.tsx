import * as React from 'react';

import { Box, Table, TableRow, TableCell, Dialog, DialogTitle, DialogContent, DialogContentText,
  Button, Typography, Slide } from '@mui/material';

import { TransitionProps } from '@mui/material/transitions';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

interface Data {
 reference: string,
 name: string,
 category: string,
 group: string,
 lithium: string,
 level: string,
 active: string
}

function createData(
 reference: string,
 name: string,
 category: string,
 group: string,
 lithium: string,
 level: string,
 active: string
): Data {
 return {
   reference,
   name,
   category,
   group,
   lithium,
   level,
   active
 };
}

const rows = [
 createData('Reference', 'Name', 'Category', 'Group', 'Lithium', 'Level', 'Active'),
 createData('Reference', 'Name', 'Category', 'Group', 'Lithium', 'Level', 'Active'),
 createData('Reference', 'Name', 'Category', 'Group', 'Lithium', 'Level', 'Active'),
 createData('Reference', 'Name', 'Category', 'Group', 'Lithium', 'Level', 'Active'),
 createData('Reference', 'Name', 'Category', 'Group', 'Lithium', 'Level', 'Active'),
 createData('Reference', 'Name', 'Category', 'Group', 'Lithium', 'Level', 'Active'),
 createData('Reference', 'Name', 'Category', 'Group', 'Lithium', 'Level', 'Active'),
 createData('Reference', 'Name', 'Category', 'Group', 'Lithium', 'Level', 'Active')
];

const Content = () => {

  const [open, setOpen] = React.useState(false);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  return (
   <Box sx={{ width: '100%', mb: 2 , background:'transparent'}}>
     {rows.map((row, index) => {
         return (
           <Box key={row.name+index} sx={{
             margin: '5px 0',
             padding: '8px',
             borderRadius: '10px',
             background: 'white',
             display: 'flex'
           }} className='table-row'>
             {/* <Checkbox icon={<KeyboardArrowDownIcon />} checkedIcon={<DescriptionOutlinedIcon />} /> */}
             <Box>
               <label className='checkbox-container'>
                 <input type='checkbox' />
                 <span className='checkmark'></span>
               </label>
             </Box>
             <Table sx={{width: '100%'}}>
               <TableRow onClick={() => setOpen(true)} style={{color: (index==0)?'#4b9fd8':'black', fontWeight: 'bold'}}>
                 <TableCell sx={{padding: '0', border: 'none'}}>{row.reference}</TableCell>
                 <TableCell sx={{padding: '0', border: 'none'}}>{row.name}</TableCell>
                 <TableCell sx={{padding: '0', border: 'none'}}>{row.category}</TableCell>
                 <TableCell sx={{padding: '0', border: 'none'}}>{row.group}</TableCell>
                 <TableCell sx={{padding: '0', border: 'none'}}>{row.lithium}</TableCell>
                 <TableCell sx={{padding: '0', border: 'none'}}>{row.level}</TableCell>
                 <TableCell sx={{padding: '0', border: 'none'}}>{row.active}</TableCell>
               </TableRow>
             </Table>
           </Box>
         );
       })}
       <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={()=>setOpen(false)}
          aria-describedby="alert-dialog-slide-description"
          sx={{
            '& .MuiDialog-paper': {
              borderRadius: 3
            }
          }}
          style={{padding: '5px 5px 5px 5px'}}
        >
          <DialogTitle sx={{width: 250}}>
            <Typography fontSize={24} fontWeight={'bold'} fontFamily={'sans-serif'}>
              Machine name
            </Typography>
            <Typography fontSize={12} fontFamily={'sans-serif'} color={'gray'}>
              Active
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description" color={'black'}>
              <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography fontWeight={'bold'}>Reference: </Typography>
                <Typography>127463892</Typography>
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography fontWeight={'bold'}>Category: </Typography>
                <Typography>Utility</Typography>
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography fontWeight={'bold'}>Brand: </Typography>
                <Typography>Cat</Typography>
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography fontWeight={'bold'}>Model: </Typography>
                <Typography>Mega-DL7</Typography>
              </Box>
            </DialogContentText>

            <Button onClick={()=>setOpen(false)} style={{width: '120px', textTransform: 'none'}} variant="outlined" color="error">
              <DeleteOutlinedIcon />
              <Typography fontFamily={'sans-serif'} >Delete</Typography>
            </Button>
            <Button onClick={()=>setOpen(false)} variant="outlined" style={{width: '120px', textTransform: 'none'}} color="primary">
              <EditOutlinedIcon />
              <Typography fontFamily={'sans-serif'} >Edit</Typography>
            </Button>
          </DialogContent>
        </Dialog>
      </Box>
  );
}

export default Content