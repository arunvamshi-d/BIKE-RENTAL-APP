import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

export default function Bike({bike}) {
    const [Quantity,setquantity]= useState(1)
    const [Varients,setvarients]= useState('small')
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div style={{margin:'70px'}}className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
            <h1>{bike.name}</h1>
            <img src={bike.image} className="img-fluid" style={{heigth:'200px',width:'200px'}}/>
            </div>

            <div className="flex-cointainer">
                <div className='w-100 m-1'>
                    <p>TIME(Min 6hrs)</p>
                    <select className='form-control'value={Varients}onChange={(e)=>{setvarients(e.target.value)}}>
                        {bike.varients.map(varients=>{
                            return <option value={varients}>{varients}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>DISTANCE IN KMS</p>
                    <select className='form-control'value={Quantity}onChange={(e)=>{setquantity(e.target.value)}}>
                      {[...Array(50).keys()].map((x,i)=>{

                          return <option value={i+20}>{i+20}</option>
                      })}
                    </select>
                </div>

            </div>

            <div className="flex-cointainer">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price:{bike.prices[0][Varients]*Quantity} Rs/-</h1>
                </div>
                <div className='m-1 w=100'>
                    <button className="btn">BOOK MY RIDE </button>
                </div>

            </div>
            <Modal show={show}>
  <Modal.Header closeButton>
    <Modal.Title>{bike.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <img src={bike.image} className="img-fluid" style={{height:'400px'}}/>
    <p>{bike.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <button className="btn"onClick={handleClose}>CLOSE</button>
  </Modal.Footer>
</Modal>
        </div>
        
    )
}


