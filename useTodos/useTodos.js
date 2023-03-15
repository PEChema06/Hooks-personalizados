import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = (initialState=[]) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }


    const [todos, dispatch] = useReducer(todoReducer, initialState, init)


    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos))
    
    }, [todos])

    const handleNewTodo = (todo) => {
        
        const add = {
            type: "[TODO] Add todo",
            payload: todo
        }
        dispatch(add);
    }

    const handelDeleteTodo = (id) => {

        dispatch({
            type: "[TODO] Remove todo",
            payload: id
        })

    }

    const todoCount = () => {
        return todos.length;
    }

    const onHandletoggle = (id) => {
        dispatch({
            type: "[TODO] Toggle todo",
            payload: id
        })

    }

    const listasCompletadas = () => {

        return todos.filter(todo => !todo.done).length;

    }



  return {
    todos,
    handleNewTodo,
    handelDeleteTodo,
    onHandletoggle,
    listasCompletadas : listasCompletadas(),
    todoCount: todoCount()

  } ;
}
