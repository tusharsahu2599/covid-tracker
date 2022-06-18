import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./login-sign.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Sign = () => {
  const classes = useStyles();

    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');



  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://login-signup-prod.herokuapp.com/register', {
        email: email,
        password: password,
        phone: phone,
    })
    .then(res => {
        console.log(res);
        // localStorage.setItem('token', res.data.token);
        navigate('/home');
    }).catch(err => {
        console.log(err.response.data);
        alert(err.response.data);
    })
    }

  

  return (
    <div className = "container-w">
      <h3>Sign Up</h3>
  <form className={classes.root} onSubmit={handleSubmit}>
     
     <TextField
       label="Email"
       variant="filled"
       type="email"
       required
       value={email}
       onChange={e => setEmail(e.target.value)}
     />
     
     <TextField 
       label="Phone Number"
       variant="filled"
       type="number"
       required
       value={phone}
       onChange={e => setPhone(e.target.value)}
       />

     <TextField
       label="Password"
       variant="filled"
       type="password"
       required
       value={password}

       onChange={e => setPassword(e.target.value)}
     />
     <div>
       <Button type="submit" variant="contained" color="primary">
         Signup
       </Button>
     </div>
   </form>
    </div>
  
  );
};

export default Sign;