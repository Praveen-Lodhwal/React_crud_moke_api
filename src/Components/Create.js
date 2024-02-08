import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [age, setage] = useState("")
   
  const navigate = useNavigate();

  const handlesubmitform = (e) =>{
    e.preventDefault();

    const formdata ={
      name: name,
      email: email,
      age: age,
    }

    axios.post("https://65a811b994c2c5762da8393f.mockapi.io/crud", formdata).then((response)=>{
      console.log(response)
      navigate("/readdata")
    }).catch((error)=>{
      console.log(error)
    }) 
  }

  return (
    <div>
      <div className="container-fluid ">
        <div className='row col-md-4'>
          <div className='col-md-12 bg-light p-4 rounded-4 '>
            <div><h1>Create Data</h1></div>
            <form onSubmit={handlesubmitform}>
              <div className='form-group'>
                <label>Name::</label>
                <input type="text" required vlaue={name} onChange={((e)=> {setname(e.target.value)})}  className='form-control'/>
              </div><br/>

              <div className='form-group'>
                <label>Email::</label>
                <input type="email" required  vlaue={email} onChange={((e)=>{setemail(e.target.value)})} className='form-control'/>
              </div><br/>

              <div className='form-group'>
                <label>Age::</label>
                <input type="number" min="10" max="80" required  vlaue={age} onChange={((e)=>{setage(e.target.value)})} className='form-control'/>
              </div><br/>
              
              <div className='d-grid'>
                <button type='submit' className='btn btn-primary' >Submit</button>
              </div> <br/>
            </form>
            <div className='d-flex' style={{marginLeft:"300px"}}>
              <Link to="/readdata"><button className='btn btn-info'>Read Data</button></Link>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Create
