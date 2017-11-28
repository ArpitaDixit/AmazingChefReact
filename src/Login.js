import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import React from "react";
import Modal from "react-modal";
import request from 'axios';


class Login extends React.Component {

    state = {
        SearchCriteria: [],
        isLoggedIn: false
    };

    componentWillMount(){
        if(window.localStorage.getItem("username") ){
            this.setState({isLoggedIn:true});
        }
    }

    handleLogout(){
        localStorage.removeItem("username");
        localStorage.removeItem("user_status");
        this.setState({isLoggedIn:false});
    }

    handleLogin(credentials){

        API.doLogin(credentials)
            .then((res) => {
                console.log("status",res.status);
                if(res.status===201){
                    console.log("username" + res.data.email);
                    this.setState({isLoggedIn:true});
                    localStorage.setItem("username",res.data.email);
                    localStorage.setItem("user_status",res.data.user_status);
                }


            });
    }

    handleSignup(payload) {

        API.handleSignup(payload)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

        //this.props.history.push("/");

    }

    render() {
        return (
            <div>

                <Route exact path="/" render={() => (
                    <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>
                        <img src={require("../images/phoenix.png")} alt="Login" />
                        <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                            <div style={{"marginLeft":"200px"}}>
                                <Nav isLoggedIn={this.state.isLoggedIn} route={this.props.history.push} handleLogout={this.handleLogout.bind(this)} handleLogin={this.handleLogin.bind(this)}/>
                            </div>
                            <div  style={{"color":"white","fontSize":"28px","fontWeight":"600","fontFamily":"HelveticaNeue-Bold,Helvetica,Arial,sans-serif","marginLeft":"10px"}}>
                                Search hundreds of travel sites at once.
                            </div>


                        </div>
                    </div>
                )}/>


                <Route exact path="/signup" render={() => (
                    <SignUp route={this.props.history.push} handleSignup={this.handleSignup.bind(this)}/>
                )}/>

            </div>




        );
    }
}

export default withRouter(Login);