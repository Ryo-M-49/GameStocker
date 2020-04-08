import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const shareButton = props => (
    <div>
        <Button
            variant="contained"
            color="primary"
            startIcon={<DeleteIcon />}
            // onClick={buttonClickedHandler}
        >
            DELETE
        </Button>
    </div>
);

export default shareButton;
