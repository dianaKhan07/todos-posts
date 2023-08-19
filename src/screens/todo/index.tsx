import { Box, Button, Card, Container, List, ListItem, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateStatus } from '../../store/todoSlice';
import {useState} from 'react'

const Todos = () => {
    const list = useSelector((store: RootState) => store.todo.list);
  const dispatch = useDispatch()

  
  const [value, setValue] = useState <string>("")

  const addTodoHandler = () => {
      dispatch(addTodo(value))
  }
  return (
    <Box>
      <Container sx={{mt: '100px'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant="h2">todo-list</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 3}}>
          <TextField placeholder="new todo..." onChange={(e) => setValue(e.target.value)} size="small"/>
          <Button variant="contained" onClick={addTodoHandler}>submit</Button>
        </Box>
        </Box>
        <List>
          {list.map((todo, index) => (
            <ListItem key={index}>
              <Card sx={{
                width: '100%',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Box>
              <Typography variant="h5" sx={{textDecorationLine: todo.completed ? 'line-through' : 'none'}}>{todo.text}</Typography>
                <Typography>{todo.date}</Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
              <Button onClick={() => dispatch(updateStatus(todo.id))} variant="contained" sx={{background: todo.completed ? 'green' : 'red', minWidth: '160px'}}>{todo.completed ? "completed" : "not completed"}</Button>
              <Button variant="contained" onClick={() => dispatch(removeTodo(todo.id))}>delete</Button>
              </Box>
              </Card>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  )
}

export default Todos
