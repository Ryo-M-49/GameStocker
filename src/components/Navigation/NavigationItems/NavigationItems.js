import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import ViewListIcon from '@material-ui/icons/ViewList';
import Avatar from '@material-ui/core/Avatar';
import Image from '../../../assets/images/sample-profile.png';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/timeline" exact>
            <ViewListIcon style={{ color: "white", fontSize: "50", marginRight: "20px"}} />
        </NavigationItem>
        <NavigationItem link="/mypage" exact>
            <Avatar alt="my-page" src={Image} />
        </NavigationItem>
    </ul>
);

export default navigationItems;
