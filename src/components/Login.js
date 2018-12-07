import React, { Component } from 'react'
import { login } from './UserFunctions'
import './Login.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    //  validate email and password of user
    onSubmit (e) {
        e.preventDefault()

        const user = {
            first_name:this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password

        }
        const errors = {}
        const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        errors.email = !user.email.match(emailformat) ?
            "Invalid Email" : ""
        errors.password = user.password.length < 6 ?
            "Password should be more than 6 characters" : ""
        console.log(errors)

        if (errors.email === "" && errors.password === "") {
            login(user).then(res => {
                this.props.history.push(`/login`)
            })
        }
       
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>

                            <div className="form-group">

                                <input id="username"
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Username or Email"
                                    value={this.state.email}
                                    onChange={this.onChange}/>
                            </div>
                            <br/>
                            <br/>
                            <div className="form-group">

                                <input
                                id="password"
                                type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password should more than 6 characters"
                                    value={this.state.password}
                                    onChange={this.onChange}/>
                            </div>
                            <br/>
                            <br/>
                            <button type="submit" className="btn btn-md btn-primary " id="login">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login