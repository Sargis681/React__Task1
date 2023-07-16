import React from 'react';
import "./list.css";

function List({ name, email, number, id, onDelete, onEdit, surName, img, status }) {
    console.log(status);
    return (
        <li className='container__name'>
            <img src={img} alt="" />
            <span className={status === "Live" ? "container__live" : "container__offLine"}></span>
            <span>{name}</span>
            <span>{surName}</span>
            <span>{email}</span>
            <span>{number}</span>

            <div>
                <button onClick={() => onEdit(id)}>Edit</button>
                <button onClick={() => onDelete(id)}>Delete</button>

            </div>

        </li>
    );
}

export default List;
