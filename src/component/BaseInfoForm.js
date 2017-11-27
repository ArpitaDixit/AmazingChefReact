import React from "react";

export default class BaseInfoForm extends React.Component {

    _onNameChange(name) {
        let baseInfo = this.props.baseInfo;
        baseInfo.recipe_name = name;
        this._onChange(baseInfo);
    }

    _onImageURLChange(url) {
        let baseInfo = this.props.baseInfo;
        baseInfo.image.source = url;
        this._onChange(baseInfo);
    }

    _onCookTimeChange(minutes) {
        let baseInfo = this.props.baseInfo;
        baseInfo.cook_time = minutes;
        this._onChange(baseInfo);
    }

    _onDietaryChange(text) {
        let dietary = text.split(',');
        dietary.forEach((text) => text.trim());
        let baseInfo = this.props.baseInfo;
        baseInfo.dietary = dietary;
        this._onChange(baseInfo);
    }

    _onMealTypeChange(text) {
        let meal = text.split(',');
        meal.forEach((text) => text.trim());
        let baseInfo = this.props.baseInfo;
        baseInfo.meal_type = meal;
        this._onChange(baseInfo);
    }

    _onCruisineTypeChange(text) {
        let type = text.split(',');
        type.forEach((text) => text.trim());
        let baseInfo = this.props.baseInfo;
        baseInfo.cruisine_type = type;
        this._onChange(baseInfo);
    }

    _onChange(baseInfo) {
        if (this.props.onChange)
            this.props.onChange(baseInfo);
    }

    render() {
        let baseInfo = this.props.baseInfo;
        return (
            <div className={'baseinfo-form'}>

                <input type='text'
                       required
                       placeholder={'recipe name'}
                       value={baseInfo.recipe_name || ''}
                       onChange={e => this._onNameChange(e.target.value)}/>
                <br/>

                <input type='text'
                       required
                       placeholder={'image url'}
                       value={baseInfo.image.source || ''}
                       onChange={e => this._onImageURLChange(e.target.value)}/>
                <br/>

                <input type='number'
                       required
                       placeholder={'cook time in minutes'}
                       value={baseInfo.cook_time || ''}
                       onChange={e => this._onCookTimeChange(e.target.value)}/>
                <br/>

                <input type='text'
                       required
                       placeholder={'dietary (separated by comma)'}
                       value={baseInfo.dietary || ''}
                       onChange={e => this._onDietaryChange(e.target.value)}/>
                <br/>

                <input type='text'
                       required
                       placeholder={'meal type (separated by comma)'}
                       value={baseInfo.meal_type || ''}
                       onChange={e => this._onMealTypeChange(e.target.value)}/>
                <br/>

                <input type='text'
                       required
                       placeholder={'cruisine type (separated by comma)'}
                       value={baseInfo.cruisine_type || ''}
                       onChange={e => this._onCruisineTypeChange(e.target.value)}/>

            </div>
        )
    }
}