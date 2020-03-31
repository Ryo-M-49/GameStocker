import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const UpdateButton = props => {

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={props.clickedHandler}
            >
                EDIT
            </Button>
        </div>
    );
};

export default UpdateButton;
