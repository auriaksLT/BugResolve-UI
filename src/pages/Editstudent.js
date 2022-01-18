import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function EditStudent()
{
    let navigate = useNavigate();
    const { id } = useParams();
    const [error, setError] = useState('');
    const [message, setMessage] = useState(null);
    const [allValues, setAllValues] = useState({
        name: '',
        course: '',
        email: '',
        phone: '',
     });
     
    const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    const fetchStudent = async () => {
        const res = await axios.get(`http://localhost:8000/api/edit-student/`+id);
        //console.log(res);
        if(res.data.status === 200 && res.data.student != null){
            setAllValues(res.data.student);
        } else {
            setMessage('User data could not be found, please try again');
            // need some message transfer (maybe use SweetAlert v2?) to redirection location
            //navigate('/')
        }   
    };

    useEffect(()=>{
        fetchStudent();
    }, []);   

    async function onEditStudent(e) {
        e.preventDefault();
            var update_btn = document.getElementById('update_btn');
            update_btn.disabled = true;
            update_btn.innerText = "Updating";
            await axios.put(`http://localhost:8000/api/update-student/`+id, allValues)
            .then((response) => {
                console.log(response);
                if(response.status === 200){
                    if(response.data.status === 200){
                        update_btn.innerText = "Save Changes";
                        update_btn.disabled = false;
                        setMessage(response.data.message);
                    }
                    else if(response.data.status === 400)
                    {
                        update_btn.innerText = "Save Changes";
                        update_btn.disabled = false;
                        setError(response.data.validate_err);
                    } 
                    else
                    {
                        update_btn.innerText = "Save Changes";
                        setMessage('User does not exist, please select existing user');
                        //navigate('/')
                    }
                }
            });
    }

    return(
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4> Edit User
                                <Link to={'/'} className="btn btn-primary btn-sm float-end"> BACK </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={onEditStudent}>
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
                                    <button type='submit' className='btn btn-primary my-2 float-end' id='update_btn'>Save Changes</button>
                                </div>
                            </form>
                        </div>
                        <div className='card-footer text-center'>
                            {message}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}