import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../redux';

function Add({ setIsAdding }) {
    const dispatch = useDispatch();
    const { employees } = useSelector(state => state.employees);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email
        }
        dispatch(addEmployee(newEmployee));
        setIsAdding(false);

        alert("Add succfully");
    }


    return (
            <form onSubmit={handleAdd} >
                <h1>Add Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
    );
}

export default Add