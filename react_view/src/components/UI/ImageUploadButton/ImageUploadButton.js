import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';

const ImageUploadButton = props => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userReducer.id);

    const submitImage = event => {
        event.preventDefault();
        const imageInput = document.getElementById('profile-photo-input');
        if (imageInput.files[0]) {
            const formData = new FormData();
            const uploadedImage = imageInput.files[0];
            formData.append('image', uploadedImage);
            dispatch(actions.updateUserImage(formData, userId));
        }
    };
    return (
        <React.Fragment>
            <form onSubmit={submitImage}>
                <input
                    type="file"
                    id="profile-photo-input"
                    name="profile_picture"
                    accept="image/png, image/jpeg"
                />
                <input className="submit-input" type="submit" value="Upload" />
            </form>
        </React.Fragment>
    );
};

export default ImageUploadButton;
