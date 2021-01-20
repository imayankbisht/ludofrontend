import React from 'react';
import ListItem from '@material-ui/core/ListItem';

export de function Sidebar() {
    return (
        <>
            <SidebarParent>
                {
                    SidebarItems.map(item=> (
                        <SidebarItem key={item.name}>
                            <p>{item.name}</p>
                        </SidebarItem>
                    ))
                }
            </SidebarParent>
        </>
    );
}