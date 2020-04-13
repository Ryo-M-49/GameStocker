import React from 'react';
import classes from './RecentActivity.module.css';
import SmallReviewCard from '../../SmallReviewCard/SmallReviewCard';

const RecentActivity = props => {
    const { reviews } = props;
    console.log('reviews in RecentActivty', reviews);

    let reviewCard = <p>No review to show for now. Write a review!</p>;
    if (reviews) {
        reviews.sort((a, b) => {
            if (a.point > b.point) return 1;
            if (a.point < b.point) return -1;
            return 0;
        });

        const array = [];
        for (let i = 0; i < 2; i++){
            array.push(
                <li className={classes.ReviewCard} key={i}>
                    <SmallReviewCard review={reviews[i]} />
                </li>
            );
            reviewCard = array;
        }
        // reviewCard = reviews.map((review, index) => {
        //     if (index > 2) {
        //         return;
        //     }
        //     return (
        //         <li key={index}>
        //             <SmallReviewCard review={review} />
        //         </li>
        //     )
        // });
    }

    return (
        <div className={classes.RecentActivity}>
            <h2 className={classes.Header}>Recent Activity</h2>
            <ul className={classes.RecentReviews}>
                {reviewCard}
            </ul>
        </div>
    );
};

export default RecentActivity;
