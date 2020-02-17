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

const shareButton = props => (
    <div>
        <StyledButton variant="contained" color="primary">
            Share
        </StyledButton>
    </div>
);

export default shareButton;
