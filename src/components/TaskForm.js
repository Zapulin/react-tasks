import React, { useState } from 'react';
import '../styles/TaskForm.css';
import { v4 as uuidv4} from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const onChange = e => {
    setInput(e.target.value);
  }

  const sendData = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    }

    props.onSubmit(newTask);
  }

  return (
    <form 
      className='task-form'
      onSubmit={sendData}>
      <input
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
        onChange={onChange}
      />
      <button className='btn-task'>add task</button>
    </form>
  );
}

export default TaskForm;