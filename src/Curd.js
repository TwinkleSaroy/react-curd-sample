import React,{useState,useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';
import axios from 'axios';



const Curd=()=> {
    const[users,setUser]=useState([]);

    useEffect(() => {
        // fetch('https://reqres.in/api/users?page=2').then((data)=>{
        //     data.json().then(response=>{
        //         console.log(response)
        //         setUser(response.data);
        //     })
        // })
        loadUsers();
       
    }, []);

     const loadUsers = async() =>{
      const result=await axios.get('http://localhost:3003/users') ; 
    setUser(result.data);
    };


//delete user
const deleteUser = async id =>{
await axios.delete(`http://localhost:3003/users/${id}`);
loadUsers();
}


    return (
    
        <div class="container">
            <h1  class="text-center mt-2" style={{color:'BLUE'}}>CURD Operation</h1>
          
          <table class="table">
  <thead class="thead-dark">
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  {
      users.map((user,index)=>(
          <tr key={index +1} >
            {/* <img key={user.avatar} src={user.avatar} />  */}
             <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
              <Link exact to={`/user/${user.id}`} className="btn btn-success mr-2">MoreInfo</Link>
               <Link  exact to={`/edit/${user.id}`} className="btn btn-primary mr-2">edit</Link>
              <Link className="btn btn-danger mr-2" onClick={()=>deleteUser(user.id)}>delete</Link>
              </td>
          </tr>
      )
       ) }
  </tbody>

</table>
<Link className="btn btn-primary text-center m-3" exact to='/adduser'>Add new user</Link>

</div>

    )
}

export default Curd;
