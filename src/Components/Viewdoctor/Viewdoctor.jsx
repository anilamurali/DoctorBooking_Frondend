import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import '../Viewdoctor/Viewdoctor.css'

function Viewdoctor() {
    const {id} = useParams()
    const [viewDoctor,setViewDoctor] = useState({})
    const availabledays= viewDoctor.available_days
    console.log(availabledays);
    // console.log(id);
    // console.log(pathParameter.id);
    const fetchData = async ()=>{
        const response = await axios.get(`http://localhost:3001/doctors/${id}`)
        // console.log(response.data);
        setViewDoctor(response.data)
    }
    console.log(viewDoctor);
    useEffect(()=>{
        fetchData()
    },[])
        
    
  return (
   <Container className='text-center container'>
    <div className='block'>
        <h2>{viewDoctor.name}</h2>
        <h4>{viewDoctor.specialty}</h4>
        <p>Hospital :{viewDoctor.hospital}</p>
        <p>Address :{viewDoctor.address}</p>
        <p>Phone :{viewDoctor.phone}</p>
        <p>Email :{viewDoctor.email}</p>
           <div className="days">Available Days:
                    {viewDoctor.available_days &&
                        viewDoctor.available_days.map((item) => (
                            <p>{item},</p>
                        ))
                    }
                </div>
        {/* <p>Availabel Days :{availabledays}</p> */}
        <p>Availbale Hours :{viewDoctor.available_hours}</p>
        



    </div>
   </Container>
  )
}

export default Viewdoctor