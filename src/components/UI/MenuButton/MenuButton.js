import React from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const menuButton = props => {

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<MenuIcon />}
        onClick={props.clicked}
      >
        Menu
      </Button>
    </div>
  );
};

export default menuButton;

