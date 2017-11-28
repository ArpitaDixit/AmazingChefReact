import React from "react";
import {StyledBox, WhiteBox} from "./component/CommonBox";





export class ContactUsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
        name:false,
        number:false,
        query:false

    };

    this.handleChange1 = this.handleChange1.bind(this);

    this.handleChange2 = this.handleChange2.bind(this);

    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({value: event.target.value});
  }

    handleChange2(event) {
        this.setState({value: event.target.value});
    }

    handleChange3(event) {
        this.setState({value: event.target.value});
    }

  handleSubmit(event) {
    alert('Your request was submitted');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Your Name:
          <input type="text" value={this.state.value} onChange={this.handleChange1} />
        </label>

          <label>
           Your contact Number:
              <input type="text" value={this.state.value} onChange={this.handleChange2} />
          </label>

          <WhiteBox id={'ingr-container'} className={'ingr-container'}>
            Your Query:
              <input type="text" value={this.state.value} onChange={this.handleChange3} />
          </WhiteBox>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}