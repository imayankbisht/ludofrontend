import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {SidebarItems} from './SidebarItems';
import {Link} from 'react-router-dom';
import { ListItemText } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default function Sidebar(props) {
    return (
        <>
           
                {
                   
                    SidebarItems.map((item)=> {
                       

                        return (
                            <Link to={item.route}>
                            <ListItem style={{ color: '#eeeeee'}} key={item.name} >
                                {<ListItemIcon>{item.icon}</ListItemIcon>}
                               <ListItemText primary={item.name} />
                            </ListItem>
                            </Link>
                        );
                    })
                }
           
        </>
    );
}