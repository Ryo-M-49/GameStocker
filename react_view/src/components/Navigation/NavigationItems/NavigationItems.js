import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './NavigationItems.module.css';
import Aux from '../../../hoc/Aux/Aux';
import NavigationItem from './NavigationItem/NavigationItem';
import CreateIcon from '@material-ui/icons/Create';
import ViewListIcon from '@material-ui/icons/ViewList';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Image from '../../../assets/images/sample-profile.png';
import * as actions from '../../../store/actions/index';

const NavigationItems = props => {
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

    const authItems = (
        <Aux>
            <NavigationItem link={`users/${auth.userId}`} exact>
                <Avatar alt="my-page" src={Image} />
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
                <CreateIcon style={{ color: 'white', fontSize: '30' }} />
            </NavigationItem>
            <NavigationItem link="/" exact>
                <ViewListIcon style={{ color: 'white', fontSize: '30' }} />
            </NavigationItem>
            {props.isAuth ? authItems : notAuthItems}
        </ul>
    );
};

export default NavigationItems;
