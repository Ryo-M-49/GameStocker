import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import classes from './MyPage.module.css';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import ImageUploadButton from '../UI/ImageUploadButton/ImageUploadButton';
import EditButton from '../UI/EditButton/EditButton';
import CancelButton from '../UI/CancelButton/CancelButton';
import SaveButton from '../UI/SaveButton/SaveButton';
import PopularReview from './PopularReview/PopularReview';
import ToAllReviewsButton from '../UI/ToAllReviewsButton/ToAllReviewsButton';
import RecentActivity from './RecentActivity/RecentActivity';
import DefaultImage from '../../assets/images/default-user.png';
import Avatar from '../UI/Avatar/Avatar';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    const userId = props.match.params.userId;
    const auth = useSelector(state => state.authReducer);

    // Information of the login user
    const user = useSelector(state => state.userReducer);
    const yourId = auth.userId;
    const isLoading = user.isLoading;

    // If the user is you, use the image from auth state, if not, that from user state
    const userImage = user.id == auth.userId ? auth.image : user.image;
    const firstName = user.first_name;
    const lastName = user.last_name;
    // Reviews of the login user
    const reviews = useSelector(state => state.reviewReducer.reviews);

    // State of component
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    // --- Event handlers

    // Handler in the input form when editing. It updates the user information based on the input
    const inputChangedHandler = (newValue, controlName) => {
        const updatedUser = {
            ...user,
            [controlName]: newValue,
        };
        // Update Reudux state to pass info to SaveButton
        // ここで渡すupdatedUserはuserReducerのstate
        dispatch(actions.setUser(updatedUser));
    };

    const buttonClickedHandler = () => {
        setIsEditing(!isEditing);
    };

    const cancelClickedHandler = () => {
        dispatch(actions.getUser(userId));
        setIsEditing(!isEditing);
    };

    useEffect(() => {
        dispatch(actions.getUser(userId));
        dispatch(actions.getUserReviews(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    let editButton = null;
    if (userId == yourId) {
        editButton = (
            <div className={classes.Button}>
                <EditButton clickedHandler={buttonClickedHandler} />
            </div>
        );
    }

    // --- UI of the left hand side of the page
    let bio = (
        <Aux>
            <div className={classes.BioWrapper}>
                <div className={classes.Picture}>
                    <Avatar
                        image={
                            user.image || auth.image ? userImage : DefaultImage
                        }
                    />
                    <p>{firstName + ' ' + lastName}</p>
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
            {editButton}
        </Aux>
    );
    // UI of the left hand side of the page ---

    // --- UI of the left hand side of the page during the editing mode
    if (isEditing) {
        bio = (
            <Aux>
                <div className={classes.BioWrapper}>
                    <div className={classes.PictureEditing}>
                        <Avatar
                            image={
                                user.image || auth.image
                                    ? userImage
                                    : DefaultImage
                            }
                        />
                        <ImageUploadButton />
                        <div className={classes.Name}>
                            <TextField
                                className={classStyles.name}
                                id="first-name"
                                label="First Name"
                                value={firstName ? firstName : ''}
                                onChange={event =>
                                    inputChangedHandler(
                                        event.target.value,
                                        'first_name'
                                    )
                                }
                            />
                            <TextField
                                className={classStyles.name}
                                id="last-name"
                                label="Last Name"
                                value={lastName ? lastName : ''}
                                onChange={event =>
                                    inputChangedHandler(
                                        event.target.value,
                                        'last_name'
                                    )
                                }
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
                            onChange={event =>
                                inputChangedHandler(
                                    event.target.value,
                                    'introduction'
                                )
                            }
                        />
                    </div>
                </div>
                <div className={classes.Button}>
                    <div>
                        <CancelButton clicked={cancelClickedHandler} />
                    </div>
                    <SaveButton type="mypage" clicked={buttonClickedHandler} />
                </div>
            </Aux>
        );
    }
    // UI of the left hand side of the page during the editing mode ---

    // --- The entire UI of the page
    let component = (
        <Aux>
            <div className={classes.MyPageLeft}>
                {bio}
                <PopularReview 
                    reviews={reviews}
                />
                <div className={classes.ToAllReviewsButtonWrapper}>
                    <Link to={`/users/${user.id}/reviews`}>
                        <ToAllReviewsButton />
                    </Link>
                </div>
            </div>
            <div className={classes.MyPageRight}>
                <RecentActivity
                    reviews={reviews}
                />
            </div>
        </Aux>
    );
    // The entire UI of the page ---

    // Loading animation will be rendered while fething data from the api
    if (isLoading) {
        component = (
            <CircularProgress className={classes.Progress} size="5rem" />
        );
    }

    return <div className={classes.MyPage}>{component}</div>;
};

export default MyPage;
