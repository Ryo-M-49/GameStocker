import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const StyledTextField = withStyles({
    root: {
      width: '500px',
    },
  })(TextField);

const reviewText = props => {
    let title = props.title;

    return (
        <form noValidate autoComplete="off">
            <div>
                <StyledTextField
                    id="outlined-multiline-static"
                    label={title}
                    multiline
                    rows="3"
                    placeholder="Write your opinion here!"
                    variant="outlined"
                />
            </div>
        </form>
    );
};

export default reviewText;
