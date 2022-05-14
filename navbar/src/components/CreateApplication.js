import React, { Component } from 'react'
import './Registration.css'
import DisplayTable from './pages/DisplayTable'



class CreateApplication extends Component {

    constructor(props) {
        super(props)
        this.state = {
            applicationName: "",
            gitPath: "",
            managerEmail: "",
            dareEmail: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this)


    }


    applicationhandler = (event) => {
        this.setState({
            applicationName: event.target.value
        })
    }
    githandler = (event) => {
        this.setState({
            gitPath: event.target.value
        })
    }
    mangerhandler = (event) => {
        this.setState({
            managerEmail: event.target.value
        })
    }
    darehandler = (event) => {
        this.setState({
            dareEmail: event.target.value
        })
    }
    handleSubmit = (event) => {
        //alert('${this.state.firstName}')
        console.log(this.state)
        this.setState({
            applicationName: "",
            gitPath: "",
            managerEmail: "",
            dareEmail: ""
        })
        event.preventDefault()

        this.props.history.push('/list')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Create Application</h1>
                    <br />
                    <label> Application Name : </label> <input type="text" value={this.state.applicationName} onChange={this.applicationhandler}></input>
                    <br />
                    <label> Git hub Path : </label> <input type="text" value={this.state.gitPath} onChange={this.githandler}></input>
                    <br />
                    <label> Manager Email : </label> <input type="text" value={this.state.managerEmail} onChange={this.mangerhandler}></input>
                    <br />
                    <label> Dare Email : </label> <input type="text" value={this.state.dareEmail} onChange={this.darehandler}></input>
                    <br />
                    <br />
                    <br />


                    <input type="submit" value="Register" onClick={() => this.props.history.push('/list')} className='registerbtn'></input>


                </form>
            </div>
        )
    }
}


export default CreateApplication;