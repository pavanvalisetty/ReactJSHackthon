import React from 'react'
import './DisplayTable.css'
class DisplayTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }
    callAPI() {
        fetch("https://jsonplaceholder.typicode.com/users").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({ list: data })
        })
    }
    render() {
        let tb_data = this.state.list.map((item) => {
            return (
                <tr key={item.id} >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            )
        })
        return (
            <div className='app-container'>
                <h3 className="p-3 text-center">React - Display a list of items</h3>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>

                        {tb_data}

                    </tbody>
                </table>
            </div>
        )
    }
}
export default DisplayTable;