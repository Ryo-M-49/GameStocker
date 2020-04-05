import React from 'react';
import Button from '@material-ui/core/Button';

const CancelButton = props => {
    return (
        <div>
            <Button variant="contained" color="primary" onClick={props.clicked}>
                Cancel
            </Button>
        </div>
    );
};

export default CancelButton;
