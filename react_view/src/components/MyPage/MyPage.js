import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import classes from './MyPage.module.css';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import Divider from '@material-ui/core/Divider';
import EditButton from '../UI/EditButton/EditButton';
import SaveButton from '../UI/SaveButton/SaveButton';
import PopularReview from './PopularReview/PopularReview';
import ToAllReviewsButton from '../UI/ToAllReviewsButton/ToAllReviewsButton';
import RecentActivity from './RecentActivity/RecentActivity';
import ProfileImage from '../../assets/images/sample-profile.png';
import Avatar from '../UI/Avatar/Avatar';
import TextField from '@material-ui/core/TextField';
import * as actions from '../../store/actions/index';

const useStyles = makeStyles(theme => ({
    root: {
        width: '600px',
    },
    name: {
        width: '100px',
    },
}));
const MyPage = props => {
    const classStyles = useStyles();
    const [isEditing, setIsEditing] = useState(false);
    const user = useSelector(state => state.userReducer);
    const userId = useSelector(state => state.authReducer.userId);
    const dispatch = useDispatch();

    const inputChangedHandler = (newValue, controlName) => {
        const updatedUser = {
            ...user,
            [controlName]: newValue,
        };
        dispatch(actions.getUserSuccess(updatedUser));
    };

    const buttonClickedHandler = () => {
        setIsEditing(!isEditing);
    }

    useEffect(() => {
        dispatch(actions.getUser(userId));
    }, [props]);

    let bio = (
        <Aux>
            <div className={classes.BioWrapper}>
                <div className={classes.Picture}>
                    <Avatar image={ProfileImage} />
                    <p>{user.first_name + ' ' + user.last_name}</p>
                </div>
                <div className={classes.Introduction}>
                    <h2>INTRODUCTION</h2>
                    <TextField
                        className={classStyles.root}
                        id="outlined-multiline-static"
                        InputProps={{
                            readOnly: true,
                          }}
                        multiline
                        rows="8"
                        variant="outlined"
                        value={user.introduction ? user.introduction : ''}
                    />
                </div>
            </div>
            <div className={classes.Button}>
                <EditButton 
                    clickedHandler={ buttonClickedHandler }
                />
            </div>
        </Aux>
    );
    if (isEditing) {
        bio = (
            <Aux>
                <div className={classes.BioWrapper}>
                    <div className={classes.Picture}>
                        <Avatar image={ProfileImage} />
                        <div className={classes.Name}>
                            <TextField
                                className={classStyles.name}
                                id="standard-basic" 
                                label="First Name" 
                                value={user.first_name ? user.first_name : ''} 
                                onChange={event => inputChangedHandler(event.target.value, 'first_name')}
                            />
                            <TextField
                                className={classStyles.name}
                                id="standard-basic" 
                                label="Last Name" 
                                value={user.last_name ? user.last_name : ''} 
                                onChange={event => inputChangedHandler(event.target.value, 'last_name')}
                            />
                        </div>
                    </div>
                    <div className={classes.Introduction}>
                        <h2>INTRODUCTION</h2>
                        <TextField
                            className={classStyles.root}
                            id="outlined-multiline-static"
                            multiline
                            rows="8"
                            placeholder="Write your introduction!"
                            variant="outlined"
                            value={user.introduction ? user.introduction : ''}
                            onChange={event => inputChangedHandler(event.target.value, 'introduction')}
                        />
                    </div>
                </div>
                <div className={classes.Button}>
                    <SaveButton 
                        type='mypage'
                        clicked={ buttonClickedHandler } 
                    />
                </div>
            </Aux> 
        );
    }

    return (
        <div className={classes.MyPage}>
            <div className={classes.MyPageLeft}>
                {bio}
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
