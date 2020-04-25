import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import MenuButton from '../../UI/MenuButton/MenuButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import * as actions from '../../../store/actions/index';

const SideDrawer = props => {
    const auth = useSelector(state => state.authReducer);
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

    const gamelist = (
        <NavigationItem link="/gamelist" exact>
            <Button style={{ color: 'black' }}>Find Game</Button>
        </NavigationItem>
    );

    const timeline = (
        <NavigationItem link="/" exact>
            <Button style={{ color: 'black' }}>Timeline</Button>
        </NavigationItem>
    );

    const signin = (
        <NavigationItem link="/signin" exact>
            <Button style={{ color: 'black' }}>Signin</Button>
        </NavigationItem>
    );

    const signout = (
        <NavigationItem link={'/'} exact>
            <Button onClick={signoutClickedHandler} style={{ color: 'black' }}>
                Signout
            </Button>
        </NavigationItem>
    );

    const mypage = (
        <NavigationItem link={`/users/${auth.userId}`} exact>
            <Button style={{ color: 'black' }}>Mypage</Button>
        </NavigationItem>
    );

    const isAuthenticated = auth.token !== null;
    let components = [timeline, gamelist, signin];
    if (isAuthenticated) {
        components = [timeline, gamelist, mypage, signout];
    }

    return (
        <div>
            {/* Delete the Button below later */}
            <MenuButton
                clicked={props.onButtonClicked}
                variant="outlined"
                color="primary"
            />
            <Drawer open={props.isOpen} onClose={props.onDrawerClosed}>
                <div
                    role="presentation"
                    onClick={props.onDrawerClosed}
                    onKeyDown={props.onDrawerClosed}
                >
                    <List>
                        {components.map((component, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                {component}
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default SideDrawer;
