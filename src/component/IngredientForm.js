import React from "react";
import {Button} from "./Button";
import MdRemoveCircle from "react-icons/lib/md/remove-circle";

export default class IngredientForm extends React.Component{
    render(){
        let index=this.props.index;
        return(
            <div className={'display-flex ingredient-form'}>
                <input type='text'
                       placeholder={'name'}
                       value={this.props.ingredient.name || ''}
                       onChange={e => this.props.onNameChange(e.target.value, index)}/>
                <input type={'text'} placeholder={'quantity'} onChange={this.props.onQuantityChange}/>
                <input type={'text'} placeholder={'metric'} onChange={this.props.onMetricChange}/>
                <input type={'text'} placeholder={'note'} onChange={this.props.onNoteChange}/>
                <MdRemoveCircle size={22} style={{color: '#FACF8E'}}
                                onClick={() => this.props.onRemove(index)}/>
            </div>
        )
    }
}