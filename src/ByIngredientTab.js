import React from "react";
import {StyledBox, WhiteBox} from "./component/CommonBox";
import {IngreButton} from "./component/IngreButton";
import {IngredientSearchSuggestion} from "./component/IngredientSearchSuggestion";
import {FlatList} from "./component/FlatList";
import {RecipeContainer} from "./RecipeContainer";

export class ByIngredientTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingrSelected: [],
            ingrSelectedSet: [],
        }
    }

    _onSuggestionSelected = (event, {suggestionValue}) => {
        let ingrSet = this.state.ingrSelectedSet;
        if (ingrSet.indexOf(suggestionValue) < 0) {
            ingrSet.push(suggestionValue);
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


    render() {
        return (
            <StyledBox>
                <div style={{display: 'flex'}}>
                    <WhiteBox id={'ingr-container'} className={'ingr-container'}>
                        <FlatList
                            data={this.state.ingrSelected}
                            keyExtractor={item => item.name}
                            renderItem={this._renderButton}/>
                    </WhiteBox>

                    <IngredientSearchSuggestion
                        onSuggestionSelected={this._onSuggestionSelected}/>
                </div>

                <RecipeContainer/>
            </StyledBox>
        )
    }
}