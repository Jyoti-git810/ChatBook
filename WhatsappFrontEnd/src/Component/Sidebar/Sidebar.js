import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core'
import Chat from '../Chat/Chat';
import SideBarChat from '../SideBarChat/SideBarChat';

 const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div className="sidebar_right">
                   <IconButton>
                        <DonutLargeIcon/>
                   </IconButton>
                   <IconButton>
                        <ChatIcon/>
                   </IconButton>
                   <IconButton>
                       <MoreVertIcon/>
                   </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchConatiner">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="search text here"/>
                </div>
            </div>
            <div className="SideBar_CharConatiner">
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
            </div>

        </div>
    )
}
 export default Sidebar;