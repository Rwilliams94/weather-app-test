import React, { Component } from 'react'

export class Temperature extends Component {

    state = {
        temperature: null,
    }

    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState({[name]: value}) 
    }
    
    

    render() {

        return (
            <div>
            <h1>Temperature</h1>
            <input name="temperature" id="temperature" type="number" onChange={this.handleChange}/>
            
            {this.state.temperature <= 10 && <h1 className="cold">It's cold ❄️</h1>}
            {this.state.temperature > 10 && this.state.temperature < 30 && <h1 className="warm">It's nice 🌼</h1>}
            { this.state.temperature >= 30 &&<h1 className="hot">It's warm ☀️</h1>}
                
            </div>
        )
    }
}

export default Temperature

