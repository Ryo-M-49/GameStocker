import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const sideDrawer = props => {
    return (
        <div>
            <Button
                onClick={props.onButtonClicked}
                variant="outlined"
                color="primary"
            >
                Menu
            </Button>
            <Drawer open={props.isOpen} onClose={props.onDrawerClosed}>
                <div
                    role="presentation"
                    onClick={props.onDrawerClosed}
                    onKeyDown={props.onDrawerClosed}
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                            (text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
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
