/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import {StyledBox, WhiteBox} from "./component/CommonBox";
import {IngreButton} from "./component/IngreButton";
import {IngredientSearchSuggestion} from "./component/IngredientSearchSuggestion";
import {FlatList} from "./component/FlatList";
import {RecipeContainer} from "./RecipeContainer";
import {Button} from "./component/Button";
import {sendRequest} from "./service/BaseServices";
import BaseContainer from "./BaseContainer";
import FaSearch from "react-icons/lib/fa/search";
import MdClearAll from "react-icons/lib/md/clear-all";
import MdExpandMore from "react-icons/lib/md/expand-more";
import ReactTooltip from "react-tooltip";

export class ByIngredientTab extends BaseContainer {
    constructor(props) {
        super(props);
        this.state = {
            ingrSelected: [],
            ingrSelectedSet: new Set([]),
            recipes: [],
            skip: 0,
            limit: 1,
            showLoadMoreButton: false,
        }
    }

    _onSuggestionSelected = (event, {suggestionValue}) => {
        let ingrSet = this.state.ingrSelectedSet;
        if (!ingrSet.has(suggestionValue)) {
            ingrSet.add(suggestionValue);
            let ingr = this.state.ingrSelected;
            let n = {name: suggestionValue, selected: true};
            ingr.push(n);
            this.setState({
                ingrSelectedSet: ingrSet,
                ingrSelected: ingr,
            });
        }
    };

    _ingrButClick = ({index}) => {
        let ingr = this.state.ingrSelected;
        ingr[index].selected = !ingr[index].selected;
        this.setState({ingrSelected: ingr});
    };
    _ingrButRemove = ({index}) => {
        let ingr = this.state.ingrSelected;
        let name = ingr[index].name;
        let ingrSet = this.state.ingrSelectedSet;
        ingr.splice(index, 1);

        ingrSet.delete(name);
        this.setState({ingrSelected: ingr, ingrSelectedSet: ingrSet});
    };

    _renderButton = (item, index) => {
        let onClick = this._ingrButClick.bind(this);
        let onClose = this._ingrButRemove.bind(this);
        return (
            <IngreButton
                index={index}
                title={item.name}
                selected={item.selected}
                onClick={onClick}
                onClose={onClose}
            />
        )
    };

    _clearIngrBox() {
        if (this.state.ingrSelected.length === 0)
            return;
        this.setState({ingrSelected: [], ingrSelectedSet: new Set([])});
    }

    _getSelectedIngr() {
        let ingr = this.state.ingrSelected;
        let included = ingr.reduce(
            (filt, item) => {
                if (item.selected) filt.push(item.name);
                return filt;
            }, []);
        let excluded = ingr.reduce(
            (filt, item) => {
                if (!item.selected) filt.push(item.name);
                return filt;
            }, []);
        return {included: included, excluded: excluded};
    }

    _search = (tag) => {
        let ingr = this._getSelectedIngr();
        let skip = 0;
        let limit = this.state.limit;
        if (tag === 'load more')
            skip += this.state.skip + limit;

        // if (ingr.included.length) {
        let url = `/search?ingredients=${JSON.stringify(ingr.included)}`;
        url += `&excluded=${JSON.stringify(ingr.excluded)}`;
        url += `&skip=${skip}`;
        url += `&limit=${limit}`;
        sendRequest('get', url, null, null, this, tag);
        // }
    };

    _renderLoadMoreButton() {
        if (this.state.showLoadMoreButton) {
            return (
                <Button onClick={() => this._search('load more')}>
                    <MdExpandMore data-tip data-for={'loadmoreBut'}/>
                    <ReactTooltip id={'loadmoreBut'}>load more recipes</ReactTooltip>
                </Button>)
        }
    }

    componentDidMount(){
        super.componentDidMount();
        this._search('new search');
    }

    onSuccess(res, tag) {
        let showLoadMoreButton = res.length === this.state.limit;
        if (tag === 'new search') {
            this.setState({
                recipes: res,
                skip: 0,
                showLoadMoreButton: showLoadMoreButton,
            });
        }
        if (tag === 'load more') {
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
                    <IngredientSearchSuggestion
                        onSuggestionSelected={this._onSuggestionSelected}/>
                    <WhiteBox id={'ingr-container'} className={'ingr-container scrollbar'}>
                        <FlatList
                            data={this.state.ingrSelected}
                            keyExtractor={item => item.name}
                            renderItem={this._renderButton}/>
                    </WhiteBox>
                    <div>
                        <Button onClick={this._clearIngrBox.bind(this)}>
                            <MdClearAll data-tip data-for='clearIngr'/>
                            <ReactTooltip id='clearIngr'>
                                <span>clear all ingredients in the box</span>
                            </ReactTooltip>
                        </Button>

                        <Button onClick={() => this._search('new search')}>
                            <FaSearch data-tip data-for='searchByIngr'/>
                            <ReactTooltip id='searchByIngr'>
                                <span>search by ingredient</span>
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