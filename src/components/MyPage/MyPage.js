import React from 'react';
import classes from './MyPage.module.css';
import { Link } from 'react-router-dom';
import YourPicture from './YourPicture/YourPicture';
import Bio from './Bio/Bio';
import PopularReview from './PopularReview/PopularReview';
import ToAllReviewsButton from '../UI/ToAllReviewsButton/ToAllReviewsButton';
import RecentActivity from './RecentActivity/RecentActivity';

const myPage = props => (
    <div className={classes.MyPage}>
        <div className={classes.MyPageLeft}>
            <div className={classes.BioWrapper}>
                <YourPicture />
                <Bio />
            </div>
            <PopularReview />
            <div className={classes.ToAllReviewsButtonWrapper}>
                <Link to='/yourreview'>
                    <ToAllReviewsButton />
                </Link>
            </div>
        </div>
        <div className={classes.MyPageRight}>
            <RecentActivity />
        </div>
    </div>
);

export default myPage;
