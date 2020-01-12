import React from 'react';
import classes from './YourReview.module.css';

const yourReview = (props) => {

    console.log(props.location.aboutProps);
    let game = props.location.aboutProps;
    return(
        <div className={classes.YourReview}>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <div>Review Component</div>
        </div>
    );
}

export default yourReview;