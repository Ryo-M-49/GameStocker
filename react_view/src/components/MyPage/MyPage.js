import React from 'react';
import { useSelector } from 'react-redux';
import classes from './MyPage.module.css';
import { Link } from 'react-router-dom';
import EditButton from '../UI/EditButton/EditButton';
import PopularReview from './PopularReview/PopularReview';
import ToAllReviewsButton from '../UI/ToAllReviewsButton/ToAllReviewsButton';
import RecentActivity from './RecentActivity/RecentActivity';
import ProfileImage from '../../assets/images/sample-profile.png';
import Avatar from '../UI/Avatar/Avatar';

const MyPage = props => {

    const userId = useSelector(state => state.authReducer.userId);

    return (
        <div className={classes.MyPage}>
            <div className={classes.MyPageLeft}>
                <div className={classes.BioWrapper}>
                    <div className={classes.Picture}>
                        <Avatar image={ProfileImage} />
                        <p>Name here</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className={classes.EditButton}>
                    <EditButton />
                </div>
                <PopularReview />
                <div className={classes.ToAllReviewsButtonWrapper}>
                    <Link to={`/users/${userId}/yourreviews`}>
                        <ToAllReviewsButton />
                    </Link>
                </div>
            </div>
            <div className={classes.MyPageRight}>
                <RecentActivity />
            </div>
        </div>
    );
};

export default MyPage;
