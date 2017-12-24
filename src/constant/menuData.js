import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';

export const menuListItems = (
    <div>
        <ListItem button>
            {/*<ListItemIcon>*/}
                {/*<InboxIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="Inbox" />*/}
            <span>test1</span>
        </ListItem>
        <ListItem button>
            {/*<ListItemIcon>*/}
                {/*<StarIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="Starred" />*/}
            <span>test2</span>
        </ListItem>
        <ListItem button>
            {/*<ListItemIcon>*/}
                {/*<SendIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="Send mail" />*/}
            <span>test3</span>
        </ListItem>
    </div>
);