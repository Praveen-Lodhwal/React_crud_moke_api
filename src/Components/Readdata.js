import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Readdata() {
  const [isLoading, setIsLoading] = useState(false);
  const [formdata, setformdata] = useState([])

  // jab bhi ham api se data get karte hai to use react ki language me side effect kaha jata hai 
  // jise hme useeffect me use karna padta hai
  function getdata(){    
    axios.get("https://65a811b994c2c5762da8393f.mockapi.io/crud").then((response)=>{
      console.log(response)
      setformdata(response.data)
      setIsLoading(false);
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    setIsLoading(true)
    getdata();
  }, [])

  function handledelete(id){
    window.confirm("Are you sure to delete data")    
    axios.delete(`https://65a811b994c2c5762da8393f.mockapi.io/crud/${id}`).then(()=>{
     getdata();
    });
  }

  function setDataToStorage(item_id, item_name, item_email, item_age){
    localStorage.setItem('id', item_id)
    localStorage.setItem('name', item_name)
    localStorage.setItem('email', item_email)
    localStorage.setItem('age', item_age)
  }

  return (
    <>
     <div className='container-fluid'>
      <div className='row col-md-8'>
        <div className='col-md-12 '>
          <div className='mb-2' >
            <Link to="/"><button className='btn btn-info'>Create New Data</button></Link>
          </div>
          <table className='table table-bordered table-striped table-hover bg-light rounded-3 border-0 text-center'>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? <p style={{fontSize:"15px", color:"black", fontWeight:"600"}}>Loading...</p> : null}
              {formdata.map((item)=>{
                return(
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.age}</td>
                      <td><Link to="/edit"><button className='btn btn-info' onClick={() => setDataToStorage(item.id, item.name, item.email, item.age)}>Edit</button></Link></td>
                      <td><button className='btn btn-danger' onClick={()=> handledelete(item.id)}>Delete</button></td>
                    </tr> 
                  </>
                 )        
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Readdata
 