import React, {Component} from 'react'
import './signin.css'
import bg from '../../images/backgroud.jpg'

const imgstyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute'
}

const divStyle = {
    margin: '40px',
    border: '5px solid pink',
    position: 'absolute',
    backgroundSize: 'cover',
  };

class SignIn extends Component{
    state={
        email:"",
        password:""
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);

    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]:e.target.value,
            [e.target.id]:e.target.value
        })

    }
    
    render(){
        return(
            <div className="SignIn">
            {/* <img className='image' style={imgstyle} src={bg} /> */}
    <div class="row">
    <div className="col s6">
    <h1 className=''>Blood bank</h1>
    <blockquote className=''>
    You don’t have to be a doctor to save a life: Just donate blood
    </blockquote>
    </div>
    <div className="signin-card col s6">
      <div class="card grey darken-3">
        <div class="card-content white-text">
          <span className="card-title center">Sign In</span>
          <div className="row">
    <form onSubmit={this.submitHandler} className="col s12">
    <div className="row">
    <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate" onChange={this.changeHandler} />
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 ">
        <i class="material-icons prefix">lock_outline</i>
          <input id="password" type="password" className="validate" onChange={this.changeHandler} />
          <label for="password">Password</label>
        </div>
      </div>
        <div className=" center input-field col s12 ">
         <button className="btn red">Login</button>
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

export default SignIn