/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import AutoSuggest from "react-autosuggest";
import BaseContainer from "../BaseContainer"
import {sendRequest} from "../service/BaseServices"

export class IngredientSearchSuggestion extends BaseContainer {
    constructor(props) {
        super(props);
        this.state = {
            suggestion: this.props.suggestion || [],
            value: '',
            ingredients: ['egg', 'eggs', 'egg white', 'egg york', 'egg shell', 'egg substitute', 'potato', 'tomato'],
        }
    }

    componentDidMount() {
        sendRequest('GET', '/ingredients', null, null, this, 'ingr');
    }

    onSuccess(res, tag) {
        if (tag === 'ingr') {
            let ingr = [];
            for (let cat in res) {
                let names = res[cat].map(item => item.name);
                ingr = ingr.concat(names);
            }
            if (ingr)
                this.setState({ingredients: ingr});
        }
    }

    /**
     * helper function to get suggestion given value input. Modify this function to change suggestion output
     * @param value : input text
     * @returns {*} : array of suggestion
     * @private
     */
    _getSuggestions = value => {
        let inputVal = value.trim().toLocaleLowerCase();
        let inputLen = inputVal.length;
        return inputLen < 1 ? [] : this.state.ingredients.filter(ingr =>
            ingr.toLowerCase().indexOf(inputVal) >= 0
        );
    };

    /**
     * helper function to fetch suggestion. this function get suggestions by calling getSuggestion
     * @param value : input text
     * @private
     */
    _onSuggestionsFetchRequested = ({value}) => {
        this.setState({suggestions: this._getSuggestions(value)});
    };

    /**
     * helper function to clear suggestion
     * @private
     */
    _onSuggestionClearRequested = () => {
        this.setState({suggestion: []})
    };


    /**
     * helper function to determine what to do when input value is changed.
     * this function is used as input properties
     * @param event
     * @param newValue
     * @private
     */
    _onChange = (event, {newValue}) => {
        this.setState({value: newValue})
    };

    /**
     * render suggestion item given suggestion value
     * @param suggestion
     * @private
     */
    _renderSuggestion = suggestion => <div>{suggestion}</div>;

    /**
     * get suggestion value given suggestion object
     * @param suggestion
     * @private
     */
    _getSuggestionValue = suggestion => suggestion;

    /**
     * helper function to clear input value and execute props onSuggestionSelected
     * @param event
     * @param suggestionValue
     * @private
     */
    _onSuggestionSelected(event, {suggestionValue}) {
        this.setState({value: ''});
        this.props.onSuggestionSelected(event, {suggestionValue});
    }

    render() {
        const inputProps = {
            placeholder: 'search for ingredient and select from the box',
            value: this.state.value,
            onChange: this._onChange,
        };
        return (
            <AutoSuggest
                suggestions={this.state.suggestions || []}
                onSuggestionsFetchRequested={this._onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this._onSuggestionClearRequested}
                getSuggestionValue={this._getSuggestionValue}
                inputProps={inputProps}
                renderSuggestion={this._renderSuggestion}
                onSuggestionSelected={this._onSuggestionSelected.bind(this)}
                highlightFirstSuggestion={true}
                theme={{
                    input: 'white-box no-border white-trans-background shadow ingr-search-input',
                    container: 'ingr-search-container',
                    suggestionsContainerOpen:
                        'white-box no-border white-trans-background shadow ingr-search-box ingr-suggestion-container-open scrollbar',
                    suggestion: 'ingr-suggestion',
                    suggestionHighlighted: 'ingr-suggestion-highlight',
                    suggestionsList: 'ingr-suggestion-list'
                }}/>
        )
    }
}