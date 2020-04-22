import React, { userEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './NavigationItems.module.css';
import Aux from '../../../hoc/Aux/Aux';
import NavigationItem from './NavigationItem/NavigationItem';
import CreateIcon from '@material-ui/icons/Create';
import ViewListIcon from '@material-ui/icons/ViewList';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import DefaultImage from '../../../assets/images/default-user.png';
import * as actions from '../../../store/actions/index';
import { cutString } from '../../../shared/utility';

const NavigationItems = props => {
    const auth = useSelector(state => state.authReducer);
    const user = useSelector(state => state.userReducer);
    const profileImage = user.image;
    const MAX_LENGTH_NAME = 5;

    let userName = user.first_name + ' ' + user.last_name;
    if (userName.length > MAX_LENGTH_NAME) {
        userName = cutString(userName, MAX_LENGTH_NAME);
    }
    const dispatch = useDispatch();

    const signoutClickedHandler = () => {
        dispatch(actions.logout());
        dispatch(actions.setLike({}));
        const snackbar = {
            isOpen: true,
            type: 'signout',
        };
        dispatch(actions.toggleAuthSnackbar(snackbar));
    };

// Items to render if authenticated
    const authItems = (
        <Aux>
            <NavigationItem
                className={classes.NavigationItem}
                link={`users/${auth.userId}`}
                exact
            >
                <Button
                    startIcon={
                        <Avatar
                            alt="my-page"
                            src={profileImage ? profileImage : DefaultImage}
                        />
                    }
                    style={{ color: 'white' }}
                >
                    {user ? userName : ' '}
                </Button>
            </NavigationItem>
            <NavigationItem link={'/'} exact>
                <Button
                    onClick={signoutClickedHandler}
                    style={{ color: 'white' }}
                >
                    Signout
                </Button>
            </NavigationItem>
        </Aux>
    );

// Items to render if not authenticated
    const notAuthItems = (
        <NavigationItem link="/signin" exact>
            <Button style={{ color: 'white' }}>Signin</Button>
        </NavigationItem>
    );

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/gamelist" exact>
                <Button
                    startIcon={
                        <CreateIcon
                            style={{ color: 'white', fontSize: '30' }}
                        />
                    }
                    style={{ color: 'white' }}
                >
                    WRITE
                </Button>
            </NavigationItem>
            <NavigationItem link="/" exact>
                <Button
                    startIcon={
                        <ViewListIcon
                            style={{ color: 'white', fontSize: '30' }}
                        />
                    }
                    style={{ color: 'white' }}
                >
                    TIMELINE
                </Button>
            </NavigationItem>
            {props.isAuth ? authItems : notAuthItems}
        </ul>
    );
};

export default NavigationItems;
