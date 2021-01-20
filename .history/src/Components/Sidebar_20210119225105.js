import React from 'react';

function Sidebar() {
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