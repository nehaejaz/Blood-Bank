import React, {Component} from 'react'
import DonorList from '../donors/DonorList'
import {Table,Row,Col,Card,Input, Button,Modal} from 'react-materialize'
import {connect} from 'react-redux'

class Dashboard extends Component{
 
    render(){
      const {donors}=this.props
      console.log(donors)
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
  <DonorList donors={donors}/>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
  return{
    donors: state.donor.donors
  }
}

export default connect(mapStateToProps)(Dashboard)