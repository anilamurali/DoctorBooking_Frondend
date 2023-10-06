import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Doctorcar/Doctorcard.css'
import { Link } from 'react-router-dom';


function Doctorcard({doctor}) {
    console.log(doctor);
    console.log(doctor.id);
  return (
    <Card className="text-center my-3 rounded card">
                <Card.Header><h3>{doctor.name}</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{doctor.specialty}</Card.Title>
                  <Card.Text>
                    {doctor.hospital}
                  </Card.Text>
                  <Card.Text style={{height:'30px'}}>
                    {doctor.address}
                  </Card.Text>
                  <Card.Text>
                    {doctor.phone}
                  </Card.Text>
                <Link to={`/view/${doctor.id}`}>
                <Button className='button' variant="primary">Appoiment</Button>
                </Link>
                  
                </Card.Body>
                
              </Card>

  )
}

export default Doctorcard