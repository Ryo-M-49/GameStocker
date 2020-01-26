import React from 'react';
import classes from './QuitButton.module.css';
import { withRouter } from 'react-router';

const quitButton = props => (
    <div className={classes.QuitButton} onClick={() => props.history.goBack()}>
        <i className="fa fa-times-circle"></i>
    </div>
);

export default withRouter(quitButton);
