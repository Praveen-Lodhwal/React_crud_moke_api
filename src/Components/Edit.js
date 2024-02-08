import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Edit(){

  const [id, setid] = useState(0);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    setid(localStorage.getItem('id'));
    setname(localStorage.getItem('name'));
    setemail(localStorage.getItem('email'));
    setage(localStorage.getItem('age'));
  },[])

  const updatedata = {
    name : name,
    email : email,
    age : age
  }

  const handleupdate = (e) =>{
    e.preventDefault();
    axios.put(`https://65a811b994c2c5762da8393f.mockapi.io/crud/${id}`, updatedata).then(()=>{
      navigate("/readdata")
    });
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row col-md-4'>
          <div className='col-md-12 bg-light p-4 rounded-4'>

            <div><h1>Update Data</h1></div>
            <div ><Link to="/readdata"><button className='btn btn-primary'>Read Data</button></Link></div>
            <form onSubmit={handleupdate}>
              <div className='form-group'>
                <label>name::</label>
                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} className='form-control'/>
              </div><br/>

              <div className='form-group'>
                <label>email::</label>
                <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} className='form-control'/>
              </div><br/>

              <div className='form-group'>
                <label>age::</label>
                <input type="text" value={age} onChange={(e)=>{setage(e.target.value)}} className='form-control'/>
              </div><br/><br/>
              
              <div className='d-grid'>
                <button type='submit' className='btn btn-primary' >Update</button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Edit
