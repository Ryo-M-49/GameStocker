import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const smallReviewCard = props => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Game Image"
                    height="150"
                    image={props.image}
                    title="Game Title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        GameTitle
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Good Point Here
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default smallReviewCard;
