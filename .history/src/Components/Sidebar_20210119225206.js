import React from 'react';
import ListItem from '@material-ui/core/ListItem';

export default function Sidebar() {
    return (
        <>
            <SidebarParent>
                {
                    SidebarItems.map(item=> (
                        <ListItem key={item.name}>
                            <p>{item.name}</p>
                        </SidebarItem>
                    ))
                }
            </SidebarParent>
        </>
    );
}