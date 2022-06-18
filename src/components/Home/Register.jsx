import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./login-sign.css"
import axios from 'axios';


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
  // create state variables for each input

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

function isPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
}

  const handleSubmit = e => {
    e.preventDefault();
    let data = email.split('@');
    let domain = data[1];

    if(domain === 'gmail.com' && phone.length === 10 && isPassword(password) && password.length >= 8 ){
      axios.post('http://localhost:5000/users', {
        email: email,
        password: password,
        phone: phone
      })
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err.response.data);
        alert(err.response.data);
      })
    }else{
      alert('Please enter a valid email, phone number and password');
    }
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