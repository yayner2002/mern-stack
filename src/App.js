import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullname = this.changeFullname.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)



  }

  changeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  changeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  changePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  changeFullname(e) {
    this.setState({
      fullname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const endPoint = 'http://localhost:4000/api/signup'

    const userData = {
      fullname: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios.post(`${endPoint}`, userData)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err))

    this.setState({
      fullname: '',
      username: '',
      email: '',
      password: ''
    })
  }

  render() {
    return <div>
      <div className="container">
        
      <div className="form-div">
        <form onSubmit={this.onSubmit}>
          <h3>Register Here</h3>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Full Name</label>
            <input type ="text" className="form-control" id="exampleInputEmail1" onChange={this.changeFullname} value={this.state.fullname} aria-describedby="emailHelp" name="fullname" />
            <div id="emailHelp" className="form-text">We'll never share your fullname with anyone else.</div>
          </div>
        
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Username</label>
            <input type ="text" className="form-control" id="exampleInputEmail1" onChange={this.changeUsername} value={this.state.username} aria-describedby="emailHelp" name="username" />
            <div id="emailHelp" className="form-text">We'll never share your username with anyone else.</div>
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type ="email" className="form-control" id="exampleInputEmail1" onChange={this.changeEmail} value={this.state.email} aria-describedby="emailHelp" name="email" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Password</label>
            <input type ="password" className="form-control" id="exampleInputEmail1" onChange={this.changePassword} value={this.state.password} aria-describedby="emailHelp" name="password" />
            <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    </div>;
  }
}

export default App;
