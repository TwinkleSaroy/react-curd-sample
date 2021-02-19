import React,{useState,useEffect} from 'react';
import axios from 'axios';
import  {useHistory,useParams} from 'react-router-dom';


const Edit=()=> {
    let history = useHistory();
    const{id} = useParams();
    const[user, setUser]=useState({

        name:'',
        username:'',
        email:''
    });
//distruction
const {name,username,email}=user;
    const onInputChange = e =>{
        console.log(e.target.value);
setUser({...user,[e.target.name]:e.target.value})
    };

useEffect(()=>{
    loadUser();
},[]);


// send(post) the data 
    const onSubmit = async e  =>{
        e.preventDefault();
        // wait for untill request send await
        await axios.put(`http://localhost:3003/users/${id}`,user);
      //redirect to homapage  
history.push('/');
console.log(e.target.value);
    };

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
    };

    return (
        <div className='container mt-2'>
            
            <div className='card bordeer-0 shadow w-75 text-center'>
<div className='card-header bg-success text-white '>Edit A user </div>
<div className ='card-body'>
    <form  onSubmit={e=> onSubmit(e)}>
        <div className='form-group'>
<input type='text'
className='form-group'
placeholder='enter your  name'
name='name'
value={user.name}
onChange={e => onInputChange(e)}
/>


        </div>
        <div className='form-group'>
<input type='text'
className='form-group'
placeholder='enter your user name'
name='username'

value={user.username}
onChange={e => onInputChange(e)}
/>



        </div>
        <div className='form-group'>
<input type='text'
className='form-group'
placeholder='enter your E-mail Address'
name='email'
value={user.email}
onChange={e => onInputChange(e)}
/>


        </div>
        <button className='btn btn-primary' type='submit'>edit User</button>
    </form>
</div>
        </div>
    

        </div>
    )
}

export default Edit;
