import React from 'react';
import ListItem from '@material-ui/core/ListItem';

export default function Sidebar() {
    return (
        <>
           
                {
                    SidebarItems.map(item=> (
                        <ListItem key={item.name}>
                            <p>{item.name}</p>
                        </ListItem>
                    ))
                }
            </SidebarParent>
        </>
    );
}