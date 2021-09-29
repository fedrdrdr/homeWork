import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';
import Todo from './Todo'
const size = 3;


function TodoList(props) {
  const dispatch = useDispatch()
  const state = useSelector(store => store.todoReducer)
  const inputValue = useRef(null)

  function createTodo(e) {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      payload: {
        title: inputValue.current.value,
        id: nanoid(size),
        editState: false,
      }
    })
  }

  return (
    <>

      <form className='flex' onSubmit={createTodo}>
        <input ref={inputValue} required type='text' />
        <button type='submit'>создать todo</button>
      </form>


      {state.todoList.length

        ?
        <ul className='flex'>
          {state.todoList.map(el => <Todo key={el.id} el={el} />)}
        </ul>
        : <p className='flex'>список todo пуст</p>
      }

    </>
  );
}

export default TodoList;
