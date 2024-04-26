import React, { useState } from 'react';
import { addUser } from './UserReducer';
import { useDispatch } from 'react-redux';


function Create() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const handleSubmit= (event) =>{
        event.preventDefault();
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add new user</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
           < input type="text" name='name' className='form-control' placeholder='enter name' onChange={e=>setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' className="form-control" placeholder='enter email id' onChange={e=>setEmail(e.target.value)}/>
          </div><br />
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;

