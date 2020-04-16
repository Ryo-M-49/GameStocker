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

const NavigationItems = props => {
    const auth = useSelector(state => state.authReducer);
    const user = useSelector(state => state.userReducer);
    const profileImage = user.image;
    const userName = user.first_name + ' ' + user.last_name;
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.userId) {
            dispatch(actions.getUser(auth.userId));
        }
    }, [props, userName]);

    const signoutClickedHandler = () => {
        dispatch(actions.logout());
        dispatch(actions.setLike({}));
        const snackbar = {
            isOpen: true,
            type: 'signout',
        };
        dispatch(actions.toggleAuthSnackbar(snackbar));
    };

    const authItems = (
        <Aux>
            <NavigationItem className={classes.NavigationItem} link={`users/${auth.userId}`} exact>
                <Button
                    startIcon={<Avatar alt="my-page" src={profileImage ? profileImage : DefaultImage} />}
                    style={{ color: 'white' }}
                >
                    {user.first_name ? userName : ' '}
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

    const notAuthItems = (
        <NavigationItem link="/signin" exact>
            <Button style={{ color: 'white' }}>Signin</Button>
        </NavigationItem>
    );

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/gamelist" exact>
                <Button
                    startIcon={<CreateIcon style={{ color: 'white', fontSize: '30' }} />}
                    style={{ color: 'white' }}
                >
                    WRITE
                </Button>
            </NavigationItem>
            <NavigationItem link="/" exact>
                <Button
                    startIcon={<ViewListIcon style={{ color: 'white', fontSize: '30' }} />}
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
