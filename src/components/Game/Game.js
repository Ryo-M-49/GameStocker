import React from 'react';

import classes from './Game.module.css';

const game = (props) => {
    console.log(props);
    let title = props.title;
    if (props.title.length > 13) {
        title = title.substr(0, 12) + "...";
    }

    return (
        <li className={classes.Game}>
            <img className={classes.Thumbnail} src={props.thumbnail} />
            <h2 className={classes.Title}>{title}</h2>
        </li>
    );
}

export default game;