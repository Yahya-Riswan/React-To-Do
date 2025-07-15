import React from 'react'
import "./style.css"
import {Container , Button , Form} from "react-bootstrap"

function Item({title,date,remove,complete,toogle}) {
  function getDayLabel(dateString) {
    const today = new Date();
    const uploadDate = new Date(dateString);
    today.setHours(0, 0, 0, 0);
    uploadDate.setHours(0, 0, 0, 0);

    const diffDays = Math.round((today - uploadDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} Days Ago`;
  }
  return (
    <Container className='m-2 item border p-2'>
        <Form.Check
            type="checkbox"
            id="default-checkbox"
            className={`ititle ${complete ? "complete":""}`}
            label={title}
            onChange={toogle}
            checked={complete}
          />
        {/* <li>{title}</li> */}
        <p className='date mt-3'>{getDayLabel(date)}</p>
        <Button variant='danger' onClick={remove} className='btn'><i className="fa-solid fa-trash"></i></Button>
    </Container>
  )
}

export default Item