import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Students()
{
    const { id } = useParams();
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        fetchStudents();
    }, []); 
    
    const fetchStudents = async () => {
        await axios(`http://localhost:8000/api/students`) 
        .then((response) => {
            if(response.status === 200){
                setStudents(response.data.students);
                setMessage(response.data.message);
            }
        }); 
        setLoading(false);
    }

    const deleteStudent = async (e, id) => {
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        await axios.delete(`http://localhost:8000/api/detele-student/`+id)
        .then((response) => {
            if(response.status === 200){
                thisClicked.closest("tr").remove();
                setMessage(response.data.message);
            }
        });
    }

    
    if (loading) {
        var student_HTMLTABLE = <tr><td colSpan="6" className='text-center'> <h4> Loading... </h4> </td></tr>
    } else {
        student_HTMLTABLE = students.map((item) => {
        return (
            <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.course}</th>
                <th>{item.email}</th>
                <th>{item.phone}</th>
                <th>
                    <Link to={`edit-student/${item.id}`} className='btn btn-success btn-sm mx-1'> Edit </Link>
                    <button type='button' onClick={(e)=>deleteStudent(e, item.id)} className='btn btn-danger btn-sm mx-1'> Delete </button>
                </th>
                
            </tr>
            );
        }); 
    }
    
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4> Users 
                                <Link to={'add-student'} className="btn btn-primary btn-sm float-end"> Add User </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            
                            <table className='table table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {student_HTMLTABLE}
                                </tbody>
                            </table>

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