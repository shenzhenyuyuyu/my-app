import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { menuListItems } from './constant/menuData.js';
import List from 'material-ui/List';
import './ToolsMenu.css';

class ToolsMenu extends Component {
    render() {
        return(
            <Drawer type="permanent"  classes={{
                paper: 'side-menu',
            }}>
                <List>{menuListItems}</List>
            </Drawer>
        );
    }
}
export default ToolsMenu;