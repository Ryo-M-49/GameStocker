import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const StyledAvatar = withStyles({
    root: {
        width: '150px',
        height: '150px',
    },
})(Avatar);
const largeAvatar = props => {
    return (
        <div>
            <StyledAvatar alt="Your Name" src={props.image} />
        </div>
    );
};

export default largeAvatar;
