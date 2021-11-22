import React, {useRef, useState} from 'react';
import { useDispatch,  } from 'react-redux'

function Todo({ el }) {

  const dispatch = useDispatch()
  const inputValue = useRef(el.title)
  function deleteTodo(e) {
    e.preventDefault()
    dispatch({
      type: 'DELETE_TODO',
      payload: el.id
    })
  }

  function editState() {
    dispatch({
      type: 'EDIT_STATE',
      payload: el.id,
    })
  }

  function editTodo(e){
    e.preventDefault()
    dispatch({
      type: 'EDIT_TODO',
      payload: {
        title:inputValue.current.value,
        id: el.id,
      }
    }
    )
  }

  const [form, setForm] = useState('')

  function change(e){
    setForm(e.target.value)
  }
  return (
    <>
    <li>
      {el.editState

        ?
        <form className='todo-edit' onSubmit={editTodo}>
          <div>
            <input onChange={change} ref={inputValue} defaultValue={el?.title} />
            
            <button type='submit'>изменить todo</button>
          </div>
          <br/>
          <p>{form}</p>
        </form>
        :
        <form className='todo' onSubmit={deleteTodo}>
          <p onDoubleClick={editState}>{el?.title}</p>
          <button type='submit'>удалить todo</button>
        </form>
      }


      
    </li>

    </>
  );
}

export default Todo;
