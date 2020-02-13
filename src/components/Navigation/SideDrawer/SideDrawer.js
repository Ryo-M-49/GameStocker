import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuButton from '../../UI/MenuButton/MenuButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const sideDrawer = props => {
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
                        {['Home', 'Add Review', 'Timeline', 'MyPage'].map(
                            (text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        )}
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default sideDrawer;
