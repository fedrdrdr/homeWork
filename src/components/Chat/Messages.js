import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';
import Message from './Message'


const size = 3;

function Messages(props) {
  const dispatch = useDispatch()
  const state = useSelector(store => store.chatReducer)
  const inputValue = useRef(null)

  return (
    <>
    {state.messages.length
    ?
    <ul>
      {state.messages.map(m => <Message key={m.id} m={m} />)}
    </ul>
    : <p>чатик пуст =(</p>
    }
    </>
  );
}

export default Messages;
