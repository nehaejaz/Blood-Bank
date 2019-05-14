import React from 'react'
import {Table, Modal, Button,Row,Col,Card} from 'react-materialize'

const DonorSummary = ({donor}) => {
  return (
    <div>
      <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title"><Button className=" center btn btn-floating red">nn</Button></span>
          <p><b>Name:</b> {donor.FullName}</p>
          <p><b>Blood Type:</b> {donor.BloodType}</p>
          <p><b>City:</b> {donor.City}</p>
        </div>
        <div class="card-action">
        <Modal className="center"
  header='Details'
  trigger={<Button className='red lighten-1 white-text centered'>View Details</Button>}>
<Row><h5>Full Name:</h5><p> {donor.FullName}</p></Row>
<Row><h5>Gender:</h5><p>{donor.Gender}</p></Row>
<Row><h5>Blood Type:</h5><p> {donor.BloodType}</p></Row>
<Row><h5>Contact no:</h5><p> {donor.ContactNo}</p></Row>
<Row><h5>Age:</h5><p> {donor.Age}</p></Row>
<Row><h5>City:</h5><p> {donor.City}</p></Row>
<Row><h5>Address:</h5><p> {donor.Address}</p></Row>
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
