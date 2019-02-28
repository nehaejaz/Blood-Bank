import React,{Component} from 'react';
import './signup.css';
import {Link} from 'react-router-dom'

class SignUp extends Component{
    state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]:e.target.value,
            [e.target.id]:e.target.value,
            [e.target.id]:e.target.value,
            [e.target.id]:e.target.value,
        })
    }
    render(){
        return(
        <div className="SignUp">
         <div class="row">
    <div class="col s6 offset-s3">
      <div class="card grey darken-3">
        <div class="card-content white-text">
          <span class="card-title center">SignUp</span>
          <div class="row">
    <form onSubmit={this.submitHandler} class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="firstName" type="text" class="validate" onChange={this.changeHandler}/>
          <label for="firstName">First Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="lastName" type="text" class="validate" onChange={this.changeHandler}/>
          <label for="lastName">Last Name</label>
        </div>
      </div>
      <div className='row'>
      <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate"onChange={this.changeHandler} />
          <label for="email">Email</label>
        </div>
      </div>
      <div className='row'>
      <div class="input-field col s6">
          <i class="material-icons prefix">lock_outline</i>
          <input id="password" type="password" class="validate" onChange={this.changeHandler}/>
          <label for="password">Password</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">lock_outline</i>
          <input id="confirmPassword" type="password" class="validate" onChange={this.changeHandler}/>
          <label for="confirmPassword">Confirm Password</label>
        </div>
      </div>
      <div className=" center input-field col s12 ">
         <button className="btn red">SignUp</button>
        </div>
        <p className="center">Already have an account? <Link to='/'>Click here</Link></p>
    </form>
  </div>
        </div>
      </div>
    </div>
  </div>
            
        </div>
        )
    }
}

export default SignUp