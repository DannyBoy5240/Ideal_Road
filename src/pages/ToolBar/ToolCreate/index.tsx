import * as React from 'react';

import Box from '@mui/material/Box';
import { Typography, Button, Dialog, Slide, DialogTitle, DialogContent, DialogContentText,
  TextField, Autocomplete, DialogActions } from '@mui/material';

import { TransitionProps } from '@mui/material/transitions';

import AddIcon from '@mui/icons-material/Add';

const ToolCreate = () => {

 const [open, setOpen] = React.useState(false);

 const category_list = ['1st category', '2nd category', '3rd category', '4th category'];

 const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
     children: React.ReactElement<any, any>;
   },
   ref: React.Ref<unknown>,
 ) {
   return <Slide direction="up" ref={ref} {...props} />;
 });

 return (
   <Box sx={{bgcolor: 'white', display: 'flex', flexDirection: 'row'}} p={1}>
   <Typography fontSize={24} fontWeight={'bold'} color={'black'} fontFamily={'sans-serif'} ml={1} flexGrow={1}>Tools</Typography>
   <Button 
     variant="contained" 
     style={{textTransform : 'none'}}
     sx={{padding: '3px 10px !important'}}
     onClick={()=>setOpen(true)}
     >
       <AddIcon />
       Create Tools
   </Button>
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
   >
     <DialogTitle sx={{width: 500}}>
       <Typography fontSize={28} fontWeight={'bold'} fontFamily={'sans-serif'}>
         Define your tool
       </Typography>
     </DialogTitle>
     <DialogContent>
       <DialogContentText id="alert-dialog-slide-description">
         <Box>
           <Typography fontWeight={'bold'}>Name</Typography>
           <TextField variant="outlined" placeholder="Name"  sx={{width: 500}} size="small" />
         </Box>
         <Box>
           <Typography fontWeight={'bold'}>Reference</Typography>
           <TextField variant="outlined" placeholder="Reference" sx={{width: 500}} size="small"/>
         </Box>
         <Box>
           <Typography fontWeight={'bold'}>Manufacturer</Typography>
           <TextField variant="outlined" placeholder="Manufacturer" sx={{width: 500}} size="small"/>
         </Box>
         <Box>
           <Typography fontWeight={'bold'}>Category</Typography>
           <Autocomplete
             disablePortal
             id="new_create_category"
             options={category_list}
             renderInput={(params) => <TextField {...params} label="Select a category ..." />}
             size="small"
           />
         </Box>
         <Box>
           <Typography fontWeight={'bold'}>Group</Typography>
           <Autocomplete
             disablePortal
             id="new_group"
             options={category_list}
             renderInput={(params) => <TextField {...params} label="Select a group ..." />}
             size="small"
           />
         </Box>
         <Box>
           <Typography fontWeight={'bold'}>Serial number</Typography>
           <Autocomplete
             disablePortal
             id="new_serialnumber"
             options={[]}
             renderInput={(params) => <TextField {...params} label="No serial number assigned to this device ..." />}
             size="small"
           />
         </Box>
         <Box>
           <Typography fontWeight={'bold'}>Description</Typography>
           <TextField 
              sx={{
                width: { sm: 500, md: 500 },
                '& .MuiInputBase-root': {
                    height: 100
                }
              }}
              label="Description" size="small" />
         </Box>
       </DialogContentText>
     </DialogContent>
     <DialogActions>
       <Button onClick={()=>setOpen(false)} style={{}}>Cancel</Button>
       <Button onClick={()=>setOpen(false)} variant="contained">Save tool</Button>
     </DialogActions>
   </Dialog>
  </Box>
 );
}

export default ToolCreate
