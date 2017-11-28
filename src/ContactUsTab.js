import React from "react";
import {StyledBox, WhiteBox} from "./component/CommonBox";


export class ContactUsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: '',
            number: '',
            query: ''

        };
        //
        // this.handleChange1 = this.handleChange1.bind(this);
        //
        // this.handleChange2 = this.handleChange2.bind(this);
        //
        // this.handleChange3 = this.handleChange3.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({name: event.target.value});
    }

    handleChange2(event) {
        this.setState({number: event.target.value});
    }

    handleChange3(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        alert('Your request was submitted');
        event.preventDefault();
    }

    render() {
        return (
            <StyledBox>
                <form onSubmit={this.handleSubmit} className={'form'}>
                    Your Name:
                    <input type="text" value={this.state.name}
                           onChange={this.handleChange1.bind(this)}/>
                    <br/><br/>
                    Your contact Number:
                    <input type="text" value={this.state.number}
                           onChange={this.handleChange2.bind(this)}/>
                    <br/> <br/>
                    Your Query:
                    <br/>
                    <textarea className={'scrollbar'} rows={10} cols={100}
                              value={this.state.query}
                              onChange={this.handleChange3.bind(this)}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </StyledBox>
        );
    }
}