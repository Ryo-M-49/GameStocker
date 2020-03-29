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
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
}));

const ReviewCard = props => {
    let {title, image, rating, good, gameId, createdAt } = props.review;
    const userId = useSelector(state => state.authReducer.userId)
    const classes = useStyles();
    const MAX_TEXT_LENGTH = 200;
    if (good.length > MAX_TEXT_LENGTH) {
        good = cutString(good, MAX_TEXT_LENGTH);
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Link to={`users/${userId}`} >
                        <Avatar 
                            aria-label="recipe" 
                            className={classes.avatar}
                        >
                            R
                        </Avatar>
                    </Link>
                }
                action={
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                }
                title={title}
                subheader={createdAt}
            />
            <CardMedia
                className={classes.media}
                image={image}
                title={title}
            />
            <CardContent>
                <Rating name="rating" defaultValue={rating} precision={0.5} readOnly />
                <Typography variant="body2" color="textSecondary" component="p">
                    {good}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Link
                    to={{
                        pathname: `yourreviews/${gameId}`,
                        state: {
                            game: props.review
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
