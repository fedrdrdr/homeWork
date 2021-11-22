const initialState = {
  todoList:[],
}

const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO':

      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }


    case 'DELETE_TODO':
      return {
        ...state,
        todoList: [...state.todoList.filter(item => item.id!== action.payload)]

      }
      case 'EDIT_STATE':
        return {
          ...state,
          todoList: state.todoList.map(el => {
            if(el.id===action.payload){
              el.editState=true
            }
            return el
          })
        }
        case 'EDIT_TODO':
      return {
        ...state,
        todoList: state.todoList.map(el => {
          if(el.id===action.payload.id){
            el.title=action.payload.title
             el.editState= false
          }
          return el
        })

      }

    default:
      return state
  }
}

export default todoReducer
