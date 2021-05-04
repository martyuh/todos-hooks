import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import useTodoState from './hooks/useTodoState'

const TodoApp = () => {
    // this will be rendered if there is nothing in storage
    const initialTodos = [{id:1,task:'pet a monkey',completed:false}]
    // custom hook usetodostate is returned as object instead of array, so it is destructured with curly braces instead of brackets
    //when useTodoState is called the defaultval is passed as initialTodos, but with usetodostate the key is also set. within useTodoState it accesses localStorage to grab the todos state, if todos aren't present it sets the default value. Also, when the state is changed in useTodoState it automatically sets localStorage
    const {todos,removeTodo,addTodo,toggleTodo,editTodo}=useTodoState(initialTodos)

    return (
      <Paper
      style={{
          padding:0,
          margin:0,
          height: '100vh',
          backgroundColor:'fafafa'
      }}
      elevation={0}
      >
        <AppBar color='primary' position='static' style={{height:'64'}}>
            <Toolbar>
                <Typography color='inherit'>TODOS WITH HOOKS</Typography>
            </Toolbar>
        </AppBar>
        <Grid container justify='center' style={{marginTop:'1rem'}}>
        <Grid item xs={11} md={8} lg={4}> 
        <TodoForm addTodo={addTodo}/>
        <TodoList 
            todos={todos} 
            removeTodo={removeTodo} 
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            />
        </Grid>
        </Grid>
      </Paper>
    )
}

export default TodoApp
