/**
 * Created by khoale on 11/26/2017
 */
import React from "react";
import MdRemoveCircle from "react-icons/lib/md/remove-circle";


export default class IngredientForm extends React.Component {

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

    _onNoteChange(note){
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