import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Create } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import { createTheme } from '@mui/material/styles';



export default function TodoForm({addTodo}){
    const [text,setText]=useState("");
    const handlechange=(e)=>{
        setText(e.target.value);
    };
    const handlesubmit=(e)=>{
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return(
        <ListItem>
        <form onSubmit={handlesubmit}>
        <TextField id="outlined-basic" label="Add Todo" variant="outlined" onChange={handlechange} value={text}
            InputProps={{ endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="create todo"
                    edge="end"
                    type="submit"
                  >
                    <Create/>
                    
                  </IconButton>
                </InputAdornment>
    )}}
        />
        </form>
        </ListItem>
        
    )
}