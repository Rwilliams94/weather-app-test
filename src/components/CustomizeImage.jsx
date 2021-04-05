import React, { Component } from "react";

export class CustomizeImage extends Component {
  state = {
    url: null,
    size: null,
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Customize Image</h1>
        <input id="url" name="url" type="text" onChange={this.handleChange} />
        <div className="slide-container">
          <input
            type="range"
            min="1"
            max="200"
            className="slider"
            id="size"
            name="size"
            onChange={this.handleChange}
          />
          <h3>
            {this.state.size} x {this.state.size} px
          </h3>
        </div>

        {this.state.url && (
          <img
            style={{
              width: `${this.state.size}px`,
              height: `${this.state.size}px`,
            }}
            src={this.state.url}
            alt="url"
          />
        )}
      </div>
    );
  }
}

export default CustomizeImage;
