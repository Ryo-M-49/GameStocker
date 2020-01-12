import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Game.module.css';

const game = (props) => {
    // console.log(props);
    let title = props.game.title;
    if (title.length > 13) {
        title = title.substr(0, 12) + "...";
    }

    return (
        <li className={classes.Game}>
            <Link to={
                {
                    pathname: '/review' + props.game.jan,
                    aboutProps: {
                        title: props.game.title,
                        description: props.game.itemCaption
                    }
                }
            }>
                {/* to={'/yourreview' + props.game.jan}
                exact={props.exact}
                title={props.game.title}
                description={props.game.itemCaption} */}
                <img className={classes.Thumbnail} src={props.game.largeImageUrl} alt="thumbnail" />
                <h2 className={classes.Title}>{title}</h2>
            </Link>
        </li>
    );
}

export default game;