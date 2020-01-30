import React from 'react';
import classes from './MyPage.module.css';

import Picture from './Picture/Picture';
import Bio from './Bio/Bio';
import PopularReviews from './PopularReviews/PopularReviews';

const myPage = props => (
    <div className={classes.MyPage}>
        <div className={classes.MyPageLeft}>
            <div className={classes.BioWrapper}>
                <Picture />
                <Bio />
            </div>
            <PopularReviews />
        </div>
        <div>YourReviewsComponent</div>
    </div>
);

export default myPage;
