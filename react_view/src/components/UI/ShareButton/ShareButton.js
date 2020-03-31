import React from 'react';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';

const shareButton = props => (
    <div>
        <Button
            variant="contained"
            color="primary"
            startIcon={<PublishIcon />}
            // onClick={buttonClickedHandler}
        >
            SHARE
        </Button>
    </div>
);

export default shareButton;
