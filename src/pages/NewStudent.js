import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NewStudent()
{
    let navigate = useNavigate();
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [allValues, setAllValues] = useState({
        name: '',
        course: '',
        email: '',
        phone: '',
     });
     
    const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }
    
    async function onCreateStudent(e) {
        e.preventDefault();
            await axios.post(
                `http://localhost:8000/api/add-student`,
                allValues,
            )
            .then((response) => {
                //console.log(response);
                if(response.data.status === 200){
                    navigate('/')
                }
                else
                {
                    setError(response.data.validate_err);
                }
            });
    }

    return(
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4> Add User
                                <Link to={'/'} className="btn btn-primary btn-sm float-end"> BACK </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={onCreateStudent}>
                                <div className='form-group mb-3'>
                                    <label>Name</label>
                                    <input type='text' name='name' onChange={changeHandler} value={allValues.name} className='form-control' />
                                    <span className='text-danger mb-2'>{error.name}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Type</label>
                                    <input type='text' name='course' onChange={changeHandler} value={allValues.course} className='form-control' />
                                    <span className='text-danger mb-2'>{error.course}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Email</label>
                                    <input type='email' name='email' onChange={changeHandler} value={allValues.email} className='form-control' />
                                    <span className='text-danger mb-2'>{error.email}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Phone</label>
                                    <input type='text' name='phone' onChange={changeHandler} value={allValues.phone} className='form-control' />
                                    <span className='text-danger mb-2'>{error.phone}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <button type='submit' className='btn btn-primary my-2 float-end'>Add</button>
                                </div>
                            </form>
                        </div>
                        <div className='card-footer'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}