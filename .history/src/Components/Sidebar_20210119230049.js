import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {SidebarItems} from './SidebarItems';
import {Link} from 'react-router-dom'
export default function Sidebar() {
    return (
        <>
           
                {
                   
                    SidebarItems.map((item)=> {
                        return (
                            <Link to={item.route}>
                            <ListItem key={item.name} >
                                <p>{item.name}</p>
                            </ListItem>
                            </Link>
                        );
                    })
                }
           
        </>
    );
}