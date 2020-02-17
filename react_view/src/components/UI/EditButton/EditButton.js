import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const editButton = prosp => {
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
            >
                Edit
            </Button>
        </div>
    );
};

export default editButton;
