import React, {Component} from 'react'
import {Table,Row,Col,Card,Input, Button,Modal} from 'react-materialize'

class Dashboard extends Component{
    render(){
    return(
        <div className="Dasboard">
        <Row>
  <Col s={6} className=' grid center white-text offset-s3'>
  <Card className='red lighten-1' textClassName='white-text' titleClassName="white-text" title='Welcome' >
    Neha Ejaz.
    <Row><Col className='s6 offset-s3'><Input label="Enter City" icon="place" className="" validate /></Col></Row>
    </Card>
  </Col>
  </Row>
            <Table>
  <thead>
    <tr>
      <th data-field="name">Name</th>
      <th data-field="BloodType">Blood Type</th>
      <th data-field="city">City</th>
      <th data-field="city">Details</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Alvin</td>
      <td>B+</td>
      <td>Karachi</td>
      {/* <td>hello</td> */}
      <td><Modal
  header='Details'
  trigger={<Button className='red lighten-1 white-text'>View Details</Button>}>
<Row><h5>Full Name:</h5><p>Neha Ejaz</p></Row>
<Row><h5>Blood Type:</h5><p>B+</p></Row>
<Row><h5>Contact no:</h5><p>03312023210</p></Row>
<Row><h5>Age:</h5><p>20</p></Row>
<Row><h5>City:</h5><p>Karachi</p></Row>
<Row><h5>Address:</h5><p>R-44, Ayaz Town Block-2 Gulshan-e-Iqbal</p></Row>
</Modal></td>
    </tr>
  </tbody>
</Table>
        </div>
    )
    }
}

export default Dashboard