import React from "react";
import {StyledBox} from "./component/CommonBox";
import {RecipeContainer} from "./RecipeContainer";
import {Button} from "./component/Button";
import {sendRequest} from "./service/BaseServices";
import BaseContainer from "./BaseContainer";
import ReactTooltip from "react-tooltip";
import FaSearch from "react-icons/lib/fa/search";
import MdExpandMore from "react-icons/lib/md/expand-more";


export class ByNameTab extends BaseContainer {
    constructor(props) {
        super(props);
        this.state = {
            nameSelected: '',
            recipes: [],
            skip: 0,
            limit: 1,
            showLoadMoreButton: false,
        }
    }

    _searchbyname = (tag) => {
        let name = this.state.nameSelected;
        let skip = 0;
        let limit = this.state.limit;
        if (tag === 'load more')
            skip += this.state.skip + limit;

        if (name) {
            let url = `/search?name=${name}`;
            url += `&skip=${skip}`;
            url += `&limit=${limit}`;
            sendRequest('get', url, null, null, this, tag);
        }
    };

    _renderLoadMoreButton() {
        if (this.state.showLoadMoreButton) {
            return (
                <Button onClick={() => this._searchbyname('load more')}>
                    <MdExpandMore data-tip data-for={'loadmoreBut'}/>
                    <ReactTooltip id={'loadmoreBut'}>load more recipes</ReactTooltip>
                </Button>)
        }
    }

    onSuccess(res, tag) {
        let showLoadMoreButton = res.length === this.state.limit;

        if (tag === 'search') {
            console.log("inside on succcess");
            this.setState({
                recipes: res,
                skip: 0,
                showLoadMoreButton: showLoadMoreButton
            });
        } else if (tag === 'load more') {
            this.setState({
                recipes: this.state.recipes.concat(res),
                skip: this.state.skip + this.state.limit,
                showLoadMoreButton: showLoadMoreButton,
            });
        }
    }

    render() {

        return (
            <StyledBox>
                <div style={{display: 'flex'}}>
                    <div className={'form'}>
                        <label>ByName</label>
                        <input type='text'
                               onChange={e => this.setState({nameSelected: e.target.value})}/>

                        <Button onClick={() => this._searchbyname('search')}>
                            <FaSearch data-tip data-for='searchByIngr'/>
                            <ReactTooltip id='searchByIngr'>
                                <span>search</span>
                            </ReactTooltip>
                        </Button>
                    </div>
                </div>

                <RecipeContainer
                    recipes={this.state.recipes}/>
                {this._renderLoadMoreButton()}
            </StyledBox>
        )

    }

}