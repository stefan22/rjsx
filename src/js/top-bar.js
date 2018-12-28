import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import topbarLogo from '../images/todo1.png';
import { IconButton } from '@material-ui/core';
import '../scss/App.scss';


const TopBar = () => (
  <div className='top-bar' >
    <AppBar position="fixed" color="default">
      <Toolbar>
        <IconButton><img src={topbarLogo} alt='todolist logo' />
        </IconButton>
        <Typography variant="h5" color="inherit" noWrap>
        TODOLIST
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);



export default TopBar;
