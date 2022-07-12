import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function AddToDo({todo,setTodo,title,setTitle,desc,setDesc}) {
 var date = new Date()
    // var data = 
    const Submit = () => {
        setTodo([...todo,{ 
                date:date.toLocaleDateString(),
                title: title,
                description:desc}]
            );
      localStorage.setItem("todo", JSON.stringify(todo));           
          setDesc('');
          setTitle('');
    };
    
    return (
        <>
            <div className='tododiv'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: "5px auto", width: '90%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h3" color="secondary" component="div" gutterBottom>
                        Add To ToDo
                    </Typography>
                    <TextField id="outlined-basic" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    name="title"
                    placeholder="Title" variant="outlined" />
                    <br />
                    <TextField id="outline-basic" placeholder="description" value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                        name="description"
                        rows={4} multiline
                        variant="outlined" />

                    {/* button */}
                    <Button onClick={Submit} variant="contained" endIcon={<SendIcon />}>
                        Add TODO
                    </Button>
                </Box>
            </div>

        </>
    )
}

export default AddToDo