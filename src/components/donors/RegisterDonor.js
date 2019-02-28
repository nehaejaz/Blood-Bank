import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import {Row,Input,Col,Icon} from 'react-materialize';

class RegisterDonor extends Component{

    render(){
        return(
            <div className="RegisterDonor">
         <div class="row">
    <div class="col s6 offset-m3">
      <div class="card grey darken-3">
        <div class="card-content white-text">
          <span class="card-title center">Register Yourself as a <br />D O N O R</span>
          <div class="row">
    <form class="col s12">
    <Row>
    <Col s={12}>
    <Input name='on' type='date' label='Date of Birth' icon='cake' onChange={function(e, value) {}}></Input>
    </Col>
</Row>
    <h6>Gender</h6>
    <Row>
    <Input name='group1' type='radio' value='Male' label='Male' />
    <Input name='group1' type='radio' value='Female' label='Female' />
</Row>
<Row><Col className='s12'><Input s={12} label="Enter City" icon="place" className="" validate /></Col></Row>
      <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">home</i>
          <textarea id="address" class="materialize-textarea"></textarea>
          <label for="address">Address</label>
        </div>
      </div>
      <div className='row'>
      <div class="input-field col s12">
          <i class="material-icons prefix">phone</i>
          <input id="telephone" type="tel" class="validate" />
          <label for="telephone">Telephone</label>
        </div>
      </div>
      <Row>
       <Input name='group1' type='checkbox' value='agreement' label='I accept all the terms & conditions' className='filled-in'  />
      </Row>
      <div className=" center input-field col s12 ">
         <button className="btn red">Register</button>
        </div>
    </form>
  </div>
        </div>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default RegisterDonor