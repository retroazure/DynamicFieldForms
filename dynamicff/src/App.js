import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/iconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme)=>({
    root:{ 
      '& .MuiTextField-root': {
        margin: theme.spacing(1)
      }
    },
    button: {
      margin: theme.spacing(1)
  }

}))

function App() {

  const classes = useStyles();
  const [inputFields, setInputField] = useState([ {
    firstName: '', lastName: ''}
  ])

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Field", inputFields);
  }

  const handleAddFields = () => {
    setInputField([...inputFields, { firstName:'' , lastname: ''}])
  }

  const handleRemoveFields = (index) => {
    const values  = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  }

  return (
    <Container>
      <h1>Add new Member</h1>
      <form className = {classes.root} onSubmit={handleSubmit}>
          {inputFields.map((item, index)=>(
            <div key={index}>
            <TextField
            name="firstName"
            label="First Name"
            value={inputFields.firstName}
            variant="filled"
            onChange={event => handleChangeInput(index,event)}
            />

            <TextField
            name="lastName"
            label="Last Name"
            value={inputFields.lastName}
            variant="filled"
            onChange={event => handleChangeInput(index, event)}
            />
            <IconButton onClick={()=> handleRemoveFields()}>
              <RemoveIcon/>
            </IconButton>
            <IconButton onClick={()=> handleAddFields()}>
              <AddIcon/>
            </IconButton>
            </div>
          )
          )
        }
        <Button
        className={classes.button} 
        variant="contained" 
        color="primary" 
        type="submit"
        onClick={handleSubmit}
        endIcon={<Icon>send</Icon>}>Send</Button>
      </form>
    </Container>
  );
}

export default App;
