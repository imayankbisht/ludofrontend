import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {SidebarItems} from './SidebarItems';
import {Link} from 'react-router-dom';
import { ListItemText } from '@material-ui/core';
export default function Sidebar(props) {
    return (
        <>
           
                {
                   
                    SidebarItems.map((item)=> {
                        const {name,icon}=item;

                        return (
                            <Link to={item.route}>
                            <ListItem style={{ color: '#eeeeee'}} key={name} >
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                               <ListItemText>
                            </ListItem>
                            </Link>
                        );
                    })
                }
           
        </>
    );
}