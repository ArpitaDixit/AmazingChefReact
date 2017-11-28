import React, {Component} from 'react';
import './style/index.css';
import "./style/recipe.css";
import "./style/submit.css";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {StyledBox} from "./component/CommonBox";
import {Button} from "./component/Button";
import {ByIngredientTab} from "./ByIngredientTab";
import {ByNameTab} from "./ByNameTab";
import {SubmitRecipeTab} from "./SubmitRecipeTab";
import {ContactUsTab} from "./ContactUsTab";
import {FooterSection} from "./FooterSection";
import {LoginModal} from "./LoginModal";
import Headroom from "react-headroom";
import FaSignIn from "react-icons/lib/fa/sign-in";
import ReactTooltip from "react-tooltip";


export class AmzingChef extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: false,
        }
    }

    _renderLogin() {
        return <LoginModal isOpen={this.state.login}
                           onRequestClose={() => this.setState({login: false})}/>
    }

    render() {
        return (
            <div className={'container main-background'}>
                <Tabs selectedTabClassName={'tabitem-selected'}>
                    <Headroom>
                        <StyledBox className={'display-flex'}>
                            <div className={'logo'}><img src={require('./image/Amazing Chef.png')} alt={'error'}/></div>
                            <TabList className={'tablist'}>
                                <Tab className={'tabitem'}> <a>By Ingredient</a> </Tab>
                                <Tab className={'tabitem'}> <a>By Name</a> </Tab>
                                <Tab className={'tabitem'}> <a>Submit Recipe</a> </Tab>
                                <Tab className={'tabitem'}> <a>Contact Us</a> </Tab>
                            </TabList>
                            <Button onClick={() => this.setState({login: true})}>
                                <FaSignIn size={30} data-tip data-for={'loginBut'}/>
                                <ReactTooltip id={'loginBut'}>
                                    <span>Login</span>
                                </ReactTooltip>
                            </Button>
                        </StyledBox>
                    </Headroom>

                    <TabPanel>
                        <ByIngredientTab/>
                    </TabPanel>
                    <TabPanel>
                        <ByNameTab/>
                    </TabPanel>
                    <TabPanel>
                        <SubmitRecipeTab/>
                    </TabPanel>
                    <TabPanel>
                        <ContactUsTab/>
                    </TabPanel>
                </Tabs>
                <FooterSection/>

                {this._renderLogin()}
            </div>
        )
    }
}
