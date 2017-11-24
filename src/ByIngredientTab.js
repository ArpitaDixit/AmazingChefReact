import React from "react";
import {StyledBox, WhiteBox} from "./component/CommonBox";
import {IngreButton} from "./component/IngreButton";
import {IngredientSearchSuggestion} from "./component/IngredientSearchSuggestion";
import {FlatList} from "./component/FlatList";
import {RecipeContainer} from "./RecipeContainer";
import {Button} from "./component/Button";
import {sendRequest} from "./service/BaseServices";
import BaseContainer from "./BaseContainer";

export class ByIngredientTab extends BaseContainer {
    constructor(props) {
        super(props);
        this.state = {
            ingrSelected: [],
            ingrSelectedSet: new Set([]),
            recipes: [],
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

    _renderButton = (item, index) => {
        let onClick = this._ingrButClick.bind(this);
        return (
            <IngreButton
                index={index}
                title={item.name}
                selected={item.selected}
                onClick={onClick}
            />
        )
    };

    _clearIngrBox() {
        if (this.state.ingrSelected.length === 0)
            return;

        let ingr = this.state.ingrSelected;
        let selected = ingr.filter(item => item.selected);
        if (selected.length !== ingr.length) {
            let set = this.state.ingrSelectedSet;
            let clear = ingr.filter(item => !item.selected);
            clear.forEach(item => set.delete(item.name));
            this.setState({ingrSelected: selected, ingrSelectedSet: set});
        } else {
            this.setState({ingrSelected: [], ingrSelectedSet: new Set([])});

        }

    }

    _search = () => {
        let ingr = this.state.ingrSelected;
        ingr = ingr.reduce(
            (filt, item) => {
                if (item.selected) filt.push(item.name);
                return filt;
            }, []);
        if (ingr.length) {
            let url = `/search?ingredients=${JSON.stringify(ingr)}`;
            sendRequest('get', url, null, null, this, 'search');
        }
    };

    onSuccess(res, tag) {
        if (tag === 'search') {
            this.setState({recipes: res});
        }
    }

    render() {
        return (
            <StyledBox>
                <div style={{display: 'flex'}}>
                    <IngredientSearchSuggestion
                        onSuggestionSelected={this._onSuggestionSelected}/>
                    <WhiteBox id={'ingr-container'} className={'ingr-container'}>
                        <FlatList
                            data={this.state.ingrSelected}
                            keyExtractor={item => item.name}
                            renderItem={this._renderButton}/>
                    </WhiteBox>
                    <div>
                        <Button onClick={this._clearIngrBox.bind(this)}> CLEAR </Button>
                        <Button onClick={this._search}> SEARCH </Button>
                    </div>
                </div>

                <RecipeContainer
                    recipes={this.state.recipes}/>
            </StyledBox>
        )
    }
}