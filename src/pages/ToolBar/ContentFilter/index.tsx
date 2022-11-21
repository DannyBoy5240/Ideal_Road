import * as React from 'react';

import Box from '@mui/material/Box';
import { Typography, Button, Grid, ButtonGroup } from '@mui/material';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ContentFilter = () => {

 return (
    <Box py={1}>
      <Grid container>
          <Grid item flexGrow={1}>
            <Button 
              style={{textTransform : 'none'}}
              sx={{
                '&.MuiButton-root': {
                  color: 'gray'
                },
                background: '#fff'
              }}
              disabled>
                <AddIcon />
                Add filter
            </Button>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <Search sx={{background: 'white'}}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search by ..."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Button 
                  style={{textTransform : 'none'}}
                  sx={{
                    '&.MuiButton-root': {
                      color: 'white'
                    },
                    background: '#828a99'
                  }}
                  disabled>
                    <Typography mx={1}>All columns</Typography>
                    <KeyboardArrowDownIcon />
              </Button>
            </ButtonGroup>
          </Grid>
      </Grid>
    </Box>
 );
}

export default ContentFilter
