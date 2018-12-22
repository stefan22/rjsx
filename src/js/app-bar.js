import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';


function ButtonAppBar() {

  return (
    <div >
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          TODOLIST
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default ButtonAppBar;
