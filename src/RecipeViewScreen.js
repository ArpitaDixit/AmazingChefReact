/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import {RecipeView} from "./component/RecipeView";
import {StyledBox} from "./component/CommonBox";
import BaseContainer from "./BaseContainer";
import {sendRequest} from "./service/BaseServices";


export class RecipeViewScreen extends BaseContainer {

    componentDidMount() {
        this._loadData();
    }

    _loadData() {
        // console.log(this.props.match.params);
        let id = this.props.match.params.id;
        sendRequest('GET', `/recipes/${id}`, null, null, this, 'load recipe');
    }

    onSuccess(res, tag) {
        console.log(res);
        this.setState({recipe: res});
    }

    render() {
        let content = this.state.recipe ? <RecipeView recipe={this.state.recipe}/> : 'Loading';
        return (
            <StyledBox>
                {content}
            </StyledBox>

        )
    }
}