import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Game.module.css';

import PropTypes from 'prop-types';

const game = props => {
    // console.log(props);
    let title = props.game.title;
    if (title.length > 13) {
        title = title.substr(0, 12) + '...';
    }

    return (
        <li className={classes.Game}>
            <Link
                to={{
                    pathname: '/review' + props.game.jan,
                    exact: props.exact,
                    aboutProps: {
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
