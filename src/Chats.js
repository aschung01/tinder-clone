import React from 'react';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo what's up!"
                timestamp="40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Ellen"
                message="Hi!"
                timestamp="20 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Sounho"
                message="Coding is fun!"
                timestamp="30 seconds ago"
                profilePic="..."
            />
        </div>
    )
}

export default Chats
