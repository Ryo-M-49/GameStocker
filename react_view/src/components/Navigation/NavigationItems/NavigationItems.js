import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import CreateIcon from '@material-ui/icons/Create';
import ViewListIcon from '@material-ui/icons/ViewList';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Image from '../../../assets/images/sample-profile.png';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/gamelist" exact>
            <CreateIcon
                style={{ color: 'white', fontSize: '30' }}
            />
        </NavigationItem>
        <NavigationItem link="/" exact>
            <ViewListIcon
                style={{ color: 'white', fontSize: '30' }}
            />
        </NavigationItem>
        {props.isAuth ? 
            <NavigationItem link="/mypage" exact>
                <Avatar alt="my-page" src={Image} />
            </NavigationItem>
            :
            <NavigationItem link="/signin" exact>
                <Button style={{color: 'white'}}>Signin</Button>
            </NavigationItem>
        }
        {props.isAuth ?
            <Button
                onClick={props.logoutClicked}
                style={{color: 'white'}}
                >
                    Signout
            </Button>
            :
            null
        }

    </ul>
);

export default navigationItems;
