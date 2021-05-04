import React from 'react'
import TodoItem from './TodoItem'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import CheckBox from '@material-ui/core/Checkbox'
import { v4 as uuidv4 } from 'uuid'

const TodoList = ({todos, removeTodo,toggleTodo,editTodo}) => {

    // if todos exist render the paper element
    if(todos.length)return (
        <Paper>
            <List>
                {todos.map((todo,i)=>(
                <>
                <TodoItem 
                key={uuidv4()} 
                // id={todo.id} 
                // task={todo.task} 
                // completed={todo.completed} 
                // spread operator to spread all the properties as props
                {...todo}
                removeTodo={removeTodo} 
                toggleTodo={toggleTodo} 
                editTodo={editTodo}/>
                {/* if the index is smaller than the length display the divider, if it is the last one do not */}
                {i<todos.length-1 && <Divider/>}
                </>
                ))}
            </List>
            
        </Paper>
    )
    // if no todos do not render paper
return null
}

export default TodoList
