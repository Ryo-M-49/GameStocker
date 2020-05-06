import React from 'react';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone'; 
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import * as actions from '../../../store/actions/index';

const ImageUploadButton = props => {
    const dispatch = useDispatch();
    const onDrop = acceptedFiles => {
        if (acceptedFiles && acceptedFiles[0]) {
            console.log('acceptedFiles are ', acceptedFiles);
            const formDataImage = new FormData();
            formDataImage.append('uploaded_image', acceptedFiles[0]);
            console.log('formDataImage is ', formDataImage);
            dispatch(actions.setImage(formDataImage));
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/png, image/gif, image/jpeg',
    });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>
                    DROP IMAGE HERE
                </p>
            ) : (
                <Button
                    startIcon={<ImageIcon />}
                    variant="contained"
                >
                    UPLOAD
                </Button>
            )}
        </div>
    );
}

export default ImageUploadButton;