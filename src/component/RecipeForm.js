import React from "react";
import MdRemoveCircle from "react-icons/lib/md/remove-circle";
import {sortable} from "react-sortable";
import {FlatList} from "./FlatList";
import SortableItem from "react-sortable";

export class BaseInfoForm extends React.Component {

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

export class IngredientFormCell extends React.Component {

    _onNameChange(name) {
        let ingredient = this.props.ingredient;
        ingredient.name = name;
        this._onChange(ingredient);
    }

    _onQuantityChange(quantity) {
        let qnt = parseFloat(quantity);
        if (!isNaN(qnt)) {
            let ingredient = this.props.ingredient;
            ingredient.quantity = qnt;
            this._onChange(ingredient);
        }
    }

    _onMetricChange(metric) {
        let ingredient = this.props.ingredient;
        ingredient.metric = metric;
        this._onChange(ingredient);
    }

    _onNoteChange(note) {
        let ingredient = this.props.ingredient;
        ingredient.note = note;
        this._onChange(ingredient);
    }

    _onChange(ingredient) {
        if (this.props.onChange)
            this.props.onChange(ingredient, this.props.index);
    }

    render() {
        let ingredient = this.props.ingredient || {};
        return (
            <div className={'display-flex ingredient-form'}>
                <input type='text'
                       required
                       placeholder={'name'}
                       value={ingredient.name || ''}
                       onChange={e => this._onNameChange(e.target.value)}/>
                <input required type={'number'}
                       step={'0.01'}
                       placeholder={'quantity'}
                       value={ingredient.quantity || ''}
                       onChange={e => this._onQuantityChange(e.target.value)}/>
                <select onChange={e => this._onMetricChange(e.target.value)}
                        value={ingredient.metric || 'lb'}>
                    <option value={'lb'}>lb</option>
                    <option value={'count'}>count</option>
                    <option value={'tbsp'}>tbsp</option>
                </select>
                <input type={'text'} placeholder={'note'}
                       onChange={e => this._onNoteChange(e.target.value)}
                       value={ingredient.note || ''}
                       className={'note'}/>
                <MdRemoveCircle size={22} style={{color: '#FACF8E'}}
                                onClick={() => this.props.onRemove(this.props.index)}/>
            </div>
        )
    }
}

export class InstructionFormCell extends React.Component {

    _onInstructionChange(instruction) {
        this._onChange(instruction);
    }

    _onChange(instruction) {
        if (this.props.onChange)
            this.props.onChange(instruction, this.props.index);
    }

    render() {
        return (
            <div className={'display-flex instruction-form'}>
                <textarea className={'scrollbar'}
                          placeholder={'instruction'}
                          rows={4}
                          cols={50}
                          value={this.props.instruction || ''}
                          onChange={e => this._onInstructionChange(e.target.value)}/>
                <MdRemoveCircle size={22} style={{color: '#FACF8E'}}
                                onClick={() => this.props.onRemove(this.props.index)}/>
            </div>
        )
    }
}

// export class SortableInstructionForm extends React.Component {
//     state = {
//         draggingIndex: null,
//         instruction: this.props.instruction,
//     };
//
//     _updateState = (obj) => {
//         this.setState(obj);
//     }
//
//     _renderInstructionFormCell = (item, index) => {
//         return <InstructionFormCell
//             onChange={this._onInstructionChange.bind(this)}
//             index={index}
//             instruction={item}
//             onRemove={this._remInst}/>
//     };
//
//
//     render() {
//         let listItems = this.props.instruction.map((item, i) => {
//             return (
//                 <SortableItem
//                     key={i}
//                     updateState={this._updateState}
//                     items={this.props.instruction}
//                     draggingIndex={this.state.draggingIndex}
//                     sortId={i}
//                     outline="list">
//                     <InstructionFormCell
//                         index={i}
//                         instruction={item}/>
//                 </SortableItem>
//             );
//         });
//         return (
//             <div>{listItems}
//                 AAAAAAAAAAAAAAAAAAAAAAAAA</div>
//         )
//     }
// }
