import React from 'react';
import "./form.css";
import List from '../List/List';

function Form({ arr, setArr,formRef,editingId,setEditingId }) {

    function handleChange(e) {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const name = formData.get("name");
        const surname = formData.get("surname");
        const email = formData.get("email");
        const number = formData.get("number");
        const img = formData.get("img");
        const status = formData.get("status");
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
        formRef.current.reset();
    }

    function handleEdit(id) {
        const itemToEdit = arr.find(item => item.id === id);
        if (itemToEdit) {
            formRef.current.elements.name.value = itemToEdit.name;
            formRef.current.elements.surname.value = itemToEdit.surname;
            formRef.current.elements.email.value = itemToEdit.email;
            formRef.current.elements.number.value = itemToEdit.number;
            formRef.current.elements.img.value = itemToEdit.img;
            formRef.current.elements.status.value = itemToEdit.status;
            setEditingId(id);
        }
    }

    function handleDelete(id) {
        setArr(arr.filter(item => item.id !== id));
    }

    return (
        <>
            <form className="container__form" ref={formRef} onSubmit={handleChange}>
                <h1>Number List</h1>
                <input className="container__input" name="name" placeholder="Name..." />
                <input className="container__input" name="surname" placeholder="Surname..." />
                <input className="container__input" name="email" placeholder="Email..." />
                <input className="container__input" name="number" placeholder="+374..." />
                <input className="container__input" name="img" placeholder="img url.." />
                <select className="container__input" name="status">
                    <option value="Live">Live</option>
                    <option value="Offline">Offline</option>
                </select>
                <button className='container__add' type="submit">{editingId ? 'Update' : 'Add'}</button>
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
