import React from 'react';
import classes from './MyPage.module.css';

const myPage = prosp => (
    <div className={classes.MyPage}>
        <div>PictureComponent</div>
        <div>BioComponent</div>
        <div>PopularReviewComponent</div>
        <div>YourReviewsComponent</div>
    </div>
);

export default myPage;
