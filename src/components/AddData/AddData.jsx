import React,{useState} from 'react'
import "./style.css"
import {Container , Form , Button, Alert} from "react-bootstrap"

function AddData({callback}) {
    const [input,setinput] = useState("");
    const [error,seterror] = useState(false);
    const add=()=>{
        if(input.length > 5){
            callback(input)
            setinput("")
        }else{
            seterror(true);
            setTimeout(()=>{seterror(false)},5000)
        }
    }
    return (
        <>
            {error && <Alert className='m-2' variant='danger'>Please Fill The Input. Minumum 5 Characters.</Alert>}
            <Container className='m-4 AddData'>
                <Form.Control
                    type="text"
                    id="inpudata"
                    className='m-2'
                    value={input}
                    onChange={(e)=>setinput(e.target.value)}
                    placeholder='Enter Task Here To Add'
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                        e.preventDefault(); 
                        add();
                        }
                    }}
                />
                <Button variant="danger" className='m-2' onClick={add}>Add</Button>
            </Container>
        </>
    )
}

export default AddData