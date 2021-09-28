import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

export default function Pizza({pizza}) {
    const [Quantity,setquantity]= useState(1)
    const [Varients,setvarients]= useState('small')
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div style={{margin:'70px'}}className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" style={{heigth:'400px',width:'400px'}}/>
            </div>

            <div className="flex-cointainer">
                <div className='w-100 m-1'>
                    <p>TIME IN HRS(Min 6hrs)</p>
                    <select className='form-control'value={Varients}onChange={(e)=>{setvarients(e.target.value)}}>
                        {pizza.varients.map(varients=>{
                            return <option value={varients}>{varients}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Distance IN KMS</p>
                    <select className='form-control'value={Quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                      {[...Array(50).keys()].map((x,i)=>{

                          return <option value={i+20}>{i+20}</option>
                      })}
                    </select>
                </div>

            </div>

            <div className="flex-cointainer">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price:{pizza.prices[0][Varients]*Quantity} Rs/-</h1>
                </div>
                <div className='m-1 w=100'>
                    <button className="btn">BOOK YOUR RIDE </button>
                </div>

            </div>
            <Modal show={show}>
    

  <Modal.Body>
    <img src={pizza.image} className="img-fluid" style={{height:'400px'}}/>
    <p>{pizza.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <button className="btn"onClick={handleClose}>CLOSE</button>
  </Modal.Footer>
</Modal>
        </div>
        
    )
}


