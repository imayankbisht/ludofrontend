import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {SidebarItems} from './SidebarItems';
import {Link} from 'react-router-dom';
export default function Sidebar(props) {
    return (
        <>
           
                {
                   
                    SidebarItems.map((item)=> {
                        return (
                            <Link to={item.route}>
                            <ListItem style={{ color: '#eeeeee',fontSize:'1px'}} key={item.name} >
                                <p>{item.name}</p>
                            </ListItem>
                            </Link>
                        );
                    })
                }
           
        </>
    );
}