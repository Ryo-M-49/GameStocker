import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
    root: {
        width: '500px',
        height: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
    },
    avatar: {
        backgroundColor: red[500],
    },
    button: {
        marginLeft: 'auto',
        marginRight: '0',
    },
}));

const ReviewCard = props => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                }
                title={props.title}
                subheader={props.createdAt}
            />
            <CardMedia
                className={classes.media}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Rating name="rating" defaultValue={props.rating} precision={0.5} readOnly />
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.good}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button size="small" color="primary" className={classes.button}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default ReviewCard;
