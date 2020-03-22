import React from 'react';
import { useSelector } from 'react-redux';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import CreateIcon from '@material-ui/icons/Create';
import ViewListIcon from '@material-ui/icons/ViewList';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Image from '../../../assets/images/sample-profile.png';

const NavigationItems = props => {
    const authSelector = state => state.authReducer;
    const auth = useSelector(authSelector);
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/gamelist" exact>
                <CreateIcon style={{ color: 'white', fontSize: '30' }} />
            </NavigationItem>
            <NavigationItem link="/" exact>
                <ViewListIcon style={{ color: 'white', fontSize: '30' }} />
            </NavigationItem>
            {props.isAuth ? (
                <NavigationItem link={`users/${auth.userId}`} exact>
                    <Avatar alt="my-page" src={Image} />
                </NavigationItem>
            ) : (
                <NavigationItem link="/signin" exact>
                    <Button style={{ color: 'white' }}>Signin</Button>
                </NavigationItem>
            )}
            {props.isAuth ? (
                <Button onClick={props.logoutClicked} style={{ color: 'white' }}>
                    Signout
                </Button>
            ) : null}
        </ul>
    );
}

export default NavigationItems;
