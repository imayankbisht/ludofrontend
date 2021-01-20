import React,{useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import {SidebarItems} from './SidebarItems';
import {Link} from 'react-router-dom';
import { ListItemText } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default function Sidebar(defaultActive) {
    const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
    return (
        <>
           
                {
                   
                    SidebarItems.map((item,index)=> {
                        const {name,icon,route}=item;

                        return (
                            <Link style={{ textDecoration: 'none'}} to='/'>
                            <ListItem style={{ color: '#eeeeee'}} key={name} active={index === activeIndex} >
                                {icon && <ListItemIcon style={{ color: '#a8a8a8'}}>{icon}</ListItemIcon>}
                               <ListItemText primary={name} />
                            </ListItem>
                            </Link>
                        );
                    })
                }
           
        </>
    );
}