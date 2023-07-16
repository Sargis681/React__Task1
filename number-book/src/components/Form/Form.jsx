import React, { useRef, useState } from 'react';
import "./form.css";
import List from '../List/List';

function Form({ arr, setArr }) {
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const imgRef = useRef();
    const statusRef = useRef();
    const [editingId, setEditingId] = useState(null);

    function handleChange(e) {
        e.preventDefault();
        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;
        const img = imgRef.current.value;
        const status = statusRef.current.value; 
        const id = new Date().getTime().toString();

        if (editingId) {
            setArr(arr.map(item => {
                if (item.id === editingId) {
                    return {
                        name: name,
                        surname: surname,
                        email: email,
                        number: number,
                        id: item.id,
                        img: img,
                        status: status 
                    };
                }
                return item;
            }));
            setEditingId(null);
        } else if (name !== '' && surname !== '' && email !== '' && number !== '') {
            setArr([...arr, {
                name: name,
                surname: surname,
                email: email,
                number: number,
                img: img,
                status: status, 
                id: id
            }]);
        }
        nameRef.current.value = '';
        surnameRef.current.value = '';
        emailRef.current.value = '';
        numberRef.current.value = '';
        imgRef.current.value = '';
        statusRef.current.value = ''; 
    }

    function handleEdit(id) {
        const itemToEdit = arr.find(item => item.id === id);
        if (itemToEdit) {
            nameRef.current.value = itemToEdit.name;
            surnameRef.current.value = itemToEdit.surname;
            emailRef.current.value = itemToEdit.email;
            numberRef.current.value = itemToEdit.number;
            imgRef.current.value = itemToEdit.img;
            statusRef.current.value = itemToEdit.status; 
            setEditingId(id);
        }
    }

    function handleDelete(id) {
        setArr(arr.filter(item => item.id !== id));
    }

    return (
        <>
            <form className="container__form" onSubmit={handleChange}>
                <input className="container__input" ref={nameRef} name="name" placeholder="Name..." />
                <input className="container__input" ref={surnameRef} name="surname" placeholder="Surname..." />
                <input className="container__input" ref={emailRef} name="email" placeholder="Email..." />
                <input className="container__input" ref={numberRef} name="number" placeholder="+374..." />
                <input className="container__input" ref={imgRef} name="img" placeholder="img url.." />
                <select className="container__input" ref={statusRef} name="status">
                    <option value="Live">Live</option>
                    <option value="Offline">Offline</option>
                </select>
                <button type="submit">{editingId ? 'Update' : 'Add'}</button>
            </form>
            <ul className="container__names">
                {arr.map((el) => (
                    <List
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        surName={el.surname}
                        status={el.status}
                        email={el.email}
                        number={el.number}
                        img={el.img}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </ul>
        </>
    );
}

export default Form;
