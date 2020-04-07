import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { cutString } from '../../../shared/utility';

const useStyles = makeStyles(theme => ({
    root: {
        width: '500px',
        height: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
    },
    avatar: {
        backgroundColor: red[500],
        cursor: 'pointer',
    },
    button: {
        marginLeft: 'auto',
        marginRight: '0',
    },
    action: {
        marginTop: '8px',
        marginRight: '8px',
        display: 'flex',
        alignItems: 'center',
    },
    favoriteIcon: {
        color: 'red',
    }
}));

const ReviewCard = props => {
    let { title, image, rate, good, likes_count, gameId, createdAt } = props.review;
    const userId = useSelector(state => state.authReducer.userId);
    const classes = useStyles();
    const MAX_TEXT_LENGTH = 200;
    if (good.length > MAX_TEXT_LENGTH) {
        good = cutString(good, MAX_TEXT_LENGTH);
    }

    let favorite = (
        <div className={classes.action}>
            <FavoriteBorderIcon />
            0
        </div>
    );

    if (likes_count) {
        favorite = (
            <div className={classes.action}>
                <FavoriteIcon className={classes.favoriteIcon}/>
                {likes_count}
            </div>
        );
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Link to={`users/${userId}`}>
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    </Link>
                }
                action={favorite}
                title={title}
                subheader={createdAt}
            />
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
                <Rating
                    name="rating"
                    defaultValue={rate}
                    precision={0.5}
                    readOnly
                />
                <Typography variant="body2" color="textSecondary" component="p">
                    {good}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Link
                    to={{
                        pathname: `reviews/${gameId}`,
                        state: {
                            game: props.review,
                            user_id: userId,
                        },
                    }}
                    className={classes.button}
                >
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default ReviewCard;
