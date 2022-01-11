import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function NewStudent()
{
    const { id } = useParams();
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
        if(res.status === 200 && res.data.student != null){
            setAllValues(res.data.student);
        } else {
            setMessage('Student data could not be found, please try again');
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
                if(response.status === 200){
                    console.log(response);
                    
                    update_btn.innerText = "Save Changes";
                    update_btn.disabled = false;
                    setMessage(response.data.message);
                }
            });
    }

    return(
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4> Edit Student
                                <Link to={'/'} className="btn btn-primary btn-sm float-end"> BACK </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={onEditStudent}>
                                <div className='form-group mb3'>
                                    <label>Name</label>
                                    <input type='text' name='name' onChange={changeHandler} value={allValues.name} className='form-control' />
                                </div>
                                <div className='form-group mb3'>
                                    <label>Course</label>
                                    <input type='text' name='course' onChange={changeHandler} value={allValues.course} className='form-control' />
                                </div>
                                <div className='form-group mb3'>
                                    <label>Email</label>
                                    <input type='email' name='email' onChange={changeHandler} value={allValues.email} className='form-control' />
                                </div>
                                <div className='form-group mb3'>
                                    <label>Phone</label>
                                    <input type='text' name='phone' onChange={changeHandler} value={allValues.phone} className='form-control' />
                                </div>
                                <div className='form-group mb3'>
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