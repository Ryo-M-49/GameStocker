import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
    root: {
        width: '100px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const saveButton = props => (
    <div>
        <StyledButton
            variant="contained"
            color="secondary"
            >
            Save
        </StyledButton>
    </div>
);

export default saveButton;
