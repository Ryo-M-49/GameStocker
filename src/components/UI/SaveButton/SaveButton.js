import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
    root: {
        width: '200px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const saveButton = props => (
    <div>
        <StyledButton variant="contained" color="primary">
            Save
        </StyledButton>
    </div>
);

export default saveButton;
