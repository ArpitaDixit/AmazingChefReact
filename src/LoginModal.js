import React from "react";
import Modal from "react-modal";
import axios from 'axios';

import { Button, container  } from 'react-bootstrap';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

export class LoginModal extends React.Component {

    state={
        username:'',
        password:''
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(payload) {
            axios.post(api + '/auth/login', { payload : payload })
                .then(res => {
                    console.log('response from server chck', res.data);
                    return res;
                })
                .catch(error => {
                    console.log("This is error");
                    return error;
                });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="span12">
                        <form className="form-horizontal" onSubmit={this.handleSubmit(this.state)}>
                            <fieldset>
                                <div id="legend">
                                    <legend className="">Login</legend>
                                </div>
                                <div className="control-group">
                                    <label className="control-label">Username</label>
                                    <div className="controls">
                                        <input type="text" id="username" name="username" onChange={this.handleChange} className="input-xlarge"/>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className="control-label">Password</label>
                                    <div className="controls">
                                        <input type="password" id="password" name="password" onChange={this.handleChange} class="input-xlarge"/>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="controls">
                                        <button className="btn btn-success">Login</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
