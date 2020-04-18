import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { cutString } from '../../../../shared/utility';

const smallReviewCard = props => {
    let component = <p>nothing to show now</p>;
    if (props.review) {
        let { user_id, image, title, good, gameId } = props.review;
        const MAX_LENGTH_TITLE = 10;
        const MAX_LENGTH_GOOD = 50;

        if (title.length > MAX_LENGTH_TITLE) {
            title = cutString(title, MAX_LENGTH_TITLE);
        }

        if (good.length > MAX_LENGTH_GOOD) {
            good = cutString(good, MAX_LENGTH_GOOD);
        }

        component = (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Game Image"
                        height="150"
                        image={image}
                        title="Game Title"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {good}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link
                        to={{
                            pathname: `${user_id}/reviews/${gameId}`,
                            state: {
                                game: props.review,
                                user: {
                                    userId: user_id,
                                },
                            },
                        }}
                    >
                        <Button size="small" color="primary">
                            Read More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        );
    }
    return <div>{component}</div>;
};

export default smallReviewCard;
