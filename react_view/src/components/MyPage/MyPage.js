import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import classes from './MyPage.module.css';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import EditButton from '../UI/EditButton/EditButton';
import Button from '@material-ui/core/Button';
import CancelButton from '../UI/CancelButton/CancelButton';
import SaveButton from '../UI/SaveButton/SaveButton';
import PopularReview from './PopularReview/PopularReview';
import ToAllReviewsButton from '../UI/ToAllReviewsButton/ToAllReviewsButton';
import RecentActivity from './RecentActivity/RecentActivity';
import DefaultImage from '../../assets/images/default-user.png';
import Avatar from '../UI/Avatar/Avatar';
import ImageIcon from '@material-ui/icons/Image';
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

    //Information of the login user
    const user = useSelector(state => state.userReducer);
    //Reviews of the login user
    const reviews = useSelector(state => state.reviewReducer.reviews);
    const isLoading = useSelector(state => state.reviewReducer.isLoading);
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

// --- Event handlers
    const inputChangedHandler = (newValue, controlName) => {
        const updatedUser = {
            ...user,
            [controlName]: newValue,
        };
        dispatch(actions.getUserSuccess(updatedUser));
    };

    const buttonClickedHandler = () => {
        setIsEditing(!isEditing);
    };

    const cancelClickedHandler = () => {
        dispatch(actions.getUser(user.id));
        setIsEditing(!isEditing);
    };
// Event Handlers ---

    useEffect(() => {
        dispatch(actions.getUser(user.id));
        dispatch(actions.getUserReviews(user.id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

// --- Dropzone to update the user image
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles && acceptedFiles[0]) {
            const formPayLoad = new FormData();
            formPayLoad.append('uploaded_image', acceptedFiles[0]);
            dispatch(actions.setImage(formPayLoad));
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
// Dropzone to update the user image ---

// --- UI of the left hand side of the page
    let bio = (
        <Aux>
            <div className={classes.BioWrapper}>
                <div className={classes.Picture}>
                    <Avatar
                        image={user.image ? user.image : DefaultImage}
                    />
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
                <EditButton clickedHandler={buttonClickedHandler} />
            </div>
        </Aux>
    );
// UI of the left hand side of the page ---

// --- UI of the left hand side of the page during the editing mode
    if (isEditing) {
        bio = (
            <Aux>
                <div className={classes.BioWrapper}>
                    <div className={classes.Picture}>
                        <Avatar
                            image={user.image ? user.image : DefaultImage}
                        />
                        <div className={classes.Dropzone} {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <Button
                                    startIcon={<ImageIcon />}
                                    variant="contained"
                                >
                                    DROP IMAGE
                                </Button>
                            ) : (
                                <Button
                                    startIcon={<ImageIcon />}
                                    variant="contained"
                                >
                                    UPLOAD
                                </Button>
                            )}
                        </div>
                        <div className={classes.Name}>
                            <TextField
                                className={classStyles.name}
                                id="first-name"
                                label="First Name"
                                value={user.first_name ? user.first_name : ''}
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
                                value={user.last_name ? user.last_name : ''}
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
                <PopularReview reviews={reviews} />
                <div className={classes.ToAllReviewsButtonWrapper}>
                    <Link to={`/users/${user.id}/reviews`}>
                        <ToAllReviewsButton />
                    </Link>
                </div>
            </div>
            <div className={classes.MyPageRight}>
                <RecentActivity reviews={reviews} />
            </div>
        </Aux>
    );
// The entire UI of the page ---

    // Loading animation will be rendered while fething the data from the api
    if (isLoading) {
        component = (
            <CircularProgress className={classes.Progress} size="5rem" />
        );
    }

    return <div className={classes.MyPage}>{component}</div>;
};

export default MyPage;
