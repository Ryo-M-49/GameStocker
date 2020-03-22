import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Game.module.css';

import PropTypes from 'prop-types';

const Game = props => {
    const title = props.game.title;
    const auth = useSelector(state => state.authReducer);
    return (
        <li className={classes.Game}>
            <Link
                to={{
                    pathname: `users/${auth.userId}/yourreviews/${props.game.jan}`,
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

Game.propTypes = {
    game: PropTypes.object.isRequired,
};

export default Game;
