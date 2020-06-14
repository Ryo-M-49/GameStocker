import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import classes from './Review.module.css';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from './Rating/Rating';
import Good from './Good/Good';
import Bad from './Bad/Bad';

const Review = props => {
    const review = useSelector(state => state.reviewReducer.review);
    const auth = useSelector(state => state.authReducer);
    let { userId, firstName, lastName, userImage } = props.user;
    if (props.user == null || props.user == undefined) {
        firstName = auth.first_name;
        lastName = auth.last_name;
        userImage = auth.image;
    }

    // Display your image and name if the review is yours.
    let autherInfo;
    if (auth.token && userId == auth.userId) {
        autherInfo = (
            <div className={classes.User}>
                <Link to={`/users/${userId}`}>
                    <Avatar
                        aria-label="recipe"
                        className={classes.Avatar}
                        src={auth.image}
                    />
                </Link>
                <Typography variant="h5" color="textPrimary">
                    {auth.firstName + ' ' + auth.lastName}
                </Typography>
            </div>
        );
    } else {
        // Display user image and name if the review is ohter's.
        autherInfo = (
            <div className={classes.User}>
            <Link to={`/users/${userId}`}>
                <Avatar
                    aria-label="recipe"
                    className={classes.Avatar}
                    src={userImage}
                />
            </Link>
            <Typography variant="h5" color="textPrimary">
                {firstName + ' ' + lastName}
            </Typography>
        </div>

        )
    }

    if (!auth.token && userId == auth.userId) {
        // Hide autherInfo if user is not authenticated
        autherInfo = null;
    }

    const title = props.game.title;
    let description = props.game.caption;
    if (description.length > 400) {
        description = description.substr(0, 400) + '...';
    }

    return (
        <div className={classes.Review}>
            <div className={classes.Description}>
                <a
                    href={props.game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={classes.Title}>{title}</h2>
                </a>
                <p>{description}</p>
            </div>
            { autherInfo }
            <form>
                <Rating value={review.rate} isYourReview={props.isYourReview} />
                <Good value={review.good} isYourReview={props.isYourReview} />
                <Bad value={review.bad} isYourReview={props.isYourReview} />
            </form>
        </div>
    );
};

export default Review;
