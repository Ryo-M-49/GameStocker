import React from 'react';
import classes from './UserPage.module.css';
// import { Link } from 'react-router-dom';
import UserPicture from './UserPicture/UserPicture';
import Bio from '../MyPage/Bio/Bio';
import PopularReview from '../MyPage/PopularReview/PopularReview';
// import ToAllReviewsButton from '../UI/ToAllReviewsButton/ToAllReviewsButton';
import RecentActivity from '../MyPage/RecentActivity/RecentActivity';

const userPage = props => (
    <div className={classes.UserPage}>
        <div className={classes.UserPageLeft}>
            <div className={classes.BioWrapper}>
                <UserPicture />
                <Bio />
            </div>
            <PopularReview />
            <div className={classes.ToAllReviewsButtonWrapper}>
                {/* <Link to='/yourreview'>
                    <ToAllReviewsButton />
                </Link> */}
            </div>
        </div>
        <div className={classes.UserPageRight}>
            <RecentActivity />
        </div>
    </div>
);

export default userPage;
