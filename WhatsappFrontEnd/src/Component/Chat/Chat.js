
import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { InsertEmoticonOutlined, MicOutlined } from '@material-ui/icons';

 const Chat = ({messages}) => {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
                <div className="chatbar_Info">
                    <h3>jyoti</h3>
                    <p>Last seen...</p>
                </div>
                <div className="chatbar_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                       <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((messages)=>(
                    <p className={`chat_messages ${messages.received && 'chat_recevier'}`}>
                    <span className="chat_name">{messages.name}</span>
                    {messages.messages}
                    <span className="chat_time">{messages.timeStamp}</span>
                </p>
                ))}
            </div>
            <div className="chat_footer">
                <InsertEmoticonOutlined/>
                <form>
                    <input type="text" placeholder="enetr the message"/>
                    <button type="submit">SEND</button>
                </form>
                <MicOutlined/>
            </div>
        </div>
    )
}
export default Chat