import React, { Component } from 'react'
import './Registration.css'



class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleSubmit = (event) => {
        //alert('${this.state.firstName}')
        console.log(this.state)
        this.setState({
            firstName: "",
            lastName: "",
            password: "",
            gender: ""
        })
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Create Application</h1>
                    <br />
                    <label> firstName : </label> <input type="text" value={this.state.firstName} onChange={this.firsthandler}></input>
                    <br />
                    <label> lastName : </label> <input type="text" value={this.state.lastName} onChange={this.lasthandler}></input>
                    <br />
                    <label> Password : </label> <input type="text" value={this.state.password} onChange={this.passwordhandler}></input>
                    <br />
                    <label> Gender : </label> <select type="text" defaultValue="Select Gender" value={this.state.gender} onChange={this.genderhandler}>
                        <option defaultValue> Select Gender</option>
                        <option value="male"> Male</option>
                        <option value="female"> Female</option>
                    </select>
                    <br />
                    <br />


                    <input type="submit" value="Submit"></input>


                </form>
            </div>
        )
    }
}


export default Registration;