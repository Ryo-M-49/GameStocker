import React from 'react';
import classes from './MyPage.module.css';

import Picture from './Picture/Picture';
import Bio from './Bio/Bio';
import PopularReview from './PopularReview/PopularReview';
import RecentActivity from './RecentActivity/RecentActivity';

const myPage = props => (
    <div className={classes.MyPage}>
        <div className={classes.MyPageLeft}>
            <div className={classes.BioWrapper}>
                <Picture />
                <Bio />
            </div>
            <PopularReview />
        </div>
        <div className={classes.MyPageRight}>
            <RecentActivity />
        </div>
    </div>
);

export default myPage;
