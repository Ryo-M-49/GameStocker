import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import LikeButton from '../../UI/LikeButton/LikeButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
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
        cursor: 'pointer',
    },
    button: {
        marginLeft: 'auto',
        marginRight: '0',
    },
    title: {
        textAlign: 'center',
    },
    rating: {
        margin: '.7rem 0',
    }
}));

const ReviewCard = props => {
    let {
        id,
        user_id,
        title,
        image,
        rate,
        good,
        likes_count,
        gameId,
        createdAt,
    } = props.review;

    let firstName = props.user.first_name;
    let lastName = props.user.last_name;
    let userImage = props.user.image;

    const yourId = localStorage.getItem('userId');

    const classes = useStyles();

    const MAX_TEXT_LENGTH = 200;
    if (good.length > MAX_TEXT_LENGTH) {
        good = cutString(good, MAX_TEXT_LENGTH);
    }

    const favorite = (
        <LikeButton likesCount={likes_count} userId={yourId} reviewId={id} />
    );

    //Switch the router link to YourReview component based on the current page
    let readmorePath = `users/${user_id}/reviews/${gameId}`;
    let location = useLocation();
    if (location.pathname == `/users/${yourId}/reviews`) {
        readmorePath = `reviews/${gameId}`;
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Link to={`users/${user_id}`}>
                        <Avatar aria-label="recipe" className={classes.avatar} src={userImage} />
                    </Link>
                }
                action={favorite}
                title={firstName + ' ' + lastName}
                subheader={createdAt}
            />
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
                <div className={classes.title}>
                    <Typography variant="subtitle1" color="textPrimary" component="p">
                        {title}
                    </Typography>
                </div>
                <div className={classes.rating}>
                    <Rating
                        name="rating"
                        defaultValue={rate}
                        precision={0.5}
                        readOnly
                        />

                </div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {good}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Link
                    to={{
                        pathname: readmorePath,
                        state: {
                            game: props.review,
                            user_id: user_id,
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
