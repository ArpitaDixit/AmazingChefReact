import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {StyledBox} from "./component/CommonBox";
import {Button} from "./component/Button";
import {ByIngredientTab} from "./ByIngredientTab";
import {ByNameTab} from "./ByNameTab";
import {SubmitRecipeTab} from "./SubmitRecipeTab";
import {ContactUsTab} from "./ContactUsTab";
import {FooterSection} from "./FooterSection";


class AmzingChef extends Component {

    _toggleTabClass = (index, lastIndex, event) => {
        console.log(index);
        console.log(lastIndex);
        console.log(event);

    };

    render() {
        return (

            <div className={'container main-background'}>
                <Tabs id={'????'} onSelect={this._toggleTabClass} selectedTabClassName={'tabitem-selected'}>
                    <StyledBox id={'header'}>
                        <div className={'logo'}><img src={require('./image/Amazing Chef.png')} alt={'error'}/></div>
                        <TabList className={'tablist'}>
                            <Tab className={'tabitem'}> <a>By Ingredient</a> </Tab>
                            <Tab className={'tabitem'}> <a>By Name</a> </Tab>
                            <Tab className={'tabitem'}> <a>Submit Recipe</a> </Tab>
                            <Tab className={'tabitem'}> <a>Contact Us</a> </Tab>
                        </TabList>
                        <Button><a>Login</a></Button>
                    </StyledBox>

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
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
    <AmzingChef/>
    ,
    document.getElementById('root')
);
