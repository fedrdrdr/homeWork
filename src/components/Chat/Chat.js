import React from 'react';

import Messages from './Messages';
import NewMessage from './NewMessage';


function Chat(props) {
  const ws = new WebSocket("ws://127.0.0.1:8000")
  ws.onmessage = (message) => {

  }

  return (
    <div className="flex">
      <Messages />
      <NewMessage ws/>
    </div>
  );
}

export default Chat;
