import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { menuListItems } from './constant/menuData.js';
import List from 'material-ui/List';

class ToolsMenu extends Component {
    render() {
        return(
            <Drawer>
                <List>{menuListItems}</List>
            </Drawer>
        );
    }
}
export default ToolsMenu;