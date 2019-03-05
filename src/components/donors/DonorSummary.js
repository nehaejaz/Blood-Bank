import React from 'react'
import {Table, Modal, Button,Row,Col,Card} from 'react-materialize'

const DonorSummary = ({donor}) => {
  return (
    <div>
      <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
        <Modal className="center"
  header='Details'
  trigger={<Button className='red lighten-1 white-text centered'>View Details</Button>}>
<Row><h5>Full Name:</h5><p>Neha Ejaz</p></Row>
<Row><h5>Gender:</h5><p>Female</p></Row>
<Row><h5>Blood Type:</h5><p>B+</p></Row>
<Row><h5>Contact no:</h5><p>03312023210</p></Row>
<Row><h5>Age:</h5><p>20</p></Row>
<Row><h5>City:</h5><p>Karachi</p></Row>
<Row><h5>Address:</h5><p>R-44, Ayaz Town Block-2 Gulshan-e-Iqbal</p></Row>
</Modal>
        </div>
      </div>
    </div>
                {/* <Table className="centered">
                <thead>
    <tr>
      <th data-field="name"></th>
      <th data-field="BloodType"></th>
      <th data-field="city"></th>
      <th data-field="city"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{donor.FullName}</td>
      <td>{donor.BloodType}</td>
      <td>{donor.City}</td>
      <td></td>
    </tr>
  </tbody>
</Table> */}
    </div>
  )
}
export default DonorSummary
