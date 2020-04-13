import React from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const menuButton = props => {
    return (
        <div>
            <Button
                startIcon={<MenuIcon />}
                onClick={props.clicked}
                style={{ color: 'white' }}
            >
                Menu
            </Button>
        </div>
    );
};

export default menuButton;
