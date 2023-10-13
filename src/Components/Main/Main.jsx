import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Doctorcard from '../Doctorcar/Doctorcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




function Main() {

    //state for holding api data
    const [Doctors,setDoctors]=useState([])
    const fetchData = async ()=>{
        const response= await axios.get('https://do-116d.onrender.com/doctors')
        console.log(response.data);
        setDoctors(response.data)
    }
    console.log(Doctors);
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
       <Container>
       <Row>
        {
            Doctors.map((item)=>(
               <Col sm={12} md={6} lg={4} xl={3}>
               {/* data passing to child */}
                <Doctorcard doctor={item}/>
               </Col>
                
            ))

        }

        </Row>
       </Container>
    </div>
  )
}

export default Main