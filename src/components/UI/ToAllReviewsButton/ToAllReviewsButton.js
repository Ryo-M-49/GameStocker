import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SaveIcon from '@material-ui/icons/Save';

const toAllReviewsButton = props => {

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        endIcon={<ArrowForwardIosIcon />}
      >
        All Reviews
      </Button>
    </div>
  );
}

export default toAllReviewsButton;

