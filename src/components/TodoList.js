import * as React from 'react';
import TodoItem from './TodoItem';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function TodoList({ todo, setTodo }) {

    const Delete = (element) => {
        console.log("element is:", element);
        // setTodo()
        const newTodos = todo.filter(obj => {
            return obj.title !== element.title
        })
        setTodo(newTodos);

        localStorage.setItem("todo", JSON.stringify(newTodos));


    }

    return (
        <div>
            <Typography variant="h3" sx={{ mb: 1.5 }} color="text.secondary">
            To Do list
      </Typography>
            
            {todo.length === 0 ?
            <h1  color="text.secondary">no todo to display</h1>
            : "" }
            
            {todo.map((element, index) => {
                return (
                    <div key={index} ><TodoItem
                            title={element.title}
                            date={element.date}
                            description={element.description}
                        ></TodoItem>
                        <Button  variant="outlined" color='error' onClick={() => { Delete(element) }} startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </div>

                )
            })
            }
        </div>
    );
}
