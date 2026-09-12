import { useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Box from '@mui/material/Box';

export default function FormDemo() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState(50);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{width:300,height:300,border:"1px solid red",margin:"0 auto",p:3}}>
      <h1>Name is {input}</h1>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Enter Your name"
        value={input}
        onChange={handleInput}
      />
      <h1>Volume {value}</h1>
      <Slider aria-label="Volume" value={value} onChange={handleChange} style={{width:"150px"}}/>
    </Box>
  );
}
