import React, { useRef } from 'react';
import { useDispatch, } from 'react-redux'
import { nanoid } from 'nanoid';

const size = 3;

function NewMessage( {ws} ) {
  const inputValue = useRef(null)
  const dispatch = useDispatch()

  function send(e) {
    e.preventDefault()
    console.log(inputValue.current.value)
    const message = inputValue.current.value

    ws.send(JSON.stringify({
      message
    }))
    dispatch({
      type: 'SEND',
      payload: {message:message, id: nanoid(size)},
    })
  }
  return (


    <form onSubmit={send}>
      <input type='text' ref={inputValue} />
      <button>отправить</button>
    </form>
  );
}

export default NewMessage;
