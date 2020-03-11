import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Game.module.css';

import PropTypes from 'prop-types';

const game = props => {
    const title = props.game.title;

    return (
        <li className={classes.Game}>
            <Link
                to={{
                    pathname: 'yourreviews/' + props.game.jan,
                    exact: props.exact,
                    state: {
                        game: props.game,
                    },
                }}
            >
                <img
                    className={classes.Thumbnail}
                    src={props.game.largeImageUrl}
                    alt="thumbnail"
                />
                <h2 className={classes.Title}>{title}</h2>
            </Link>
        </li>
    );
};

game.propTypes = {
    game: PropTypes.object.isRequired,
};

export default game;
