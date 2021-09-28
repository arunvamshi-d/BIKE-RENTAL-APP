import React from 'react'
import bikes from '../bikesdata'
import bike from '../components/Bike'

export default function Homescreen() {
    return (
        <div>
        <div className="row">
          {bikes.map(bike=>{
              return <div className="col-md-4 p-3">
                  <div>
                      <bikes bike={bike}/>
              </div>
              </div>
            
          })}
        </div>
        </div>
    )
}


