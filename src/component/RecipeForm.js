import React from "react";
import MdRemoveCircle from "react-icons/lib/md/remove-circle";
import FaExclamationTriangle from "react-icons/lib/fa/exclamation-triangle";
import FaCheckCircle from "react-icons/lib/fa/check-circle"


export class InputError extends React.Component {
    _renderErrIcon = () => {
        if (this.props.error)
            return <FaExclamationTriangle size={15}/>
        else
            return <FaCheckCircle size={15} color={'green'}/>;
    };

    render() {

        return (
            <div className={'input-error'}>
                {this._renderErrIcon()}
                {this.props.error || ''}
            </div>
        )
    }
}

export class BaseInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameErr: 'name cannot be empty',
            imageURLErr: 'image url cannot be empty',
            cookTimeErr: 'name cannot be empty',
            dietaryErr: 'name cannot be empty',
            mealTypeErr: 'name cannot be empty',
            cruisineTypeErr: 'name cannot be empty',
        }
    }

    _onNameChange(name) {
        let baseInfo = this.props.baseInfo;
        baseInfo.recipe_name = name;
        this._onChange(baseInfo);
        let err = '';
        if (!name)
            err = 'name cannot be empty';
        this.setState({nameErr: err})
    }

    _onImageURLChange(url) {
        let baseInfo = this.props.baseInfo;
        baseInfo.image.source = url;
        this._onChange(baseInfo);
        let err = '';
        if (!url)
            err = 'image url cannot be empty';
        this.setState({imageURLErr: err})
    }

    _onCookTimeChange(minutes) {
        let baseInfo = this.props.baseInfo;
        baseInfo.cook_time = minutes;
        this._onChange(baseInfo);
        let err = '';
        if (!minutes)
            err = 'cook time cannot be empty';
        this.setState({cookTimeErr: err})
    }

    _onDietaryChange(text) {
        let dietary = text.split(',');
        dietary.forEach((text) => text.trim());
        let baseInfo = this.props.baseInfo;
        baseInfo.dietary = dietary;
        this._onChange(baseInfo);
        let err = '';
        if (!text)
            err = 'dietary cannot be empty';
        this.setState({dietaryErr: err})
    }

    _onMealTypeChange(text) {
        let meal = text.split(',');
        meal.forEach((text) => text.trim());
        let baseInfo = this.props.baseInfo;
        baseInfo.meal_type = meal;
        this._onChange(baseInfo);
        let err = '';
        if (!text)
            err = 'meal type cannot be empty';
        this.setState({mealTypeErr: err})
    }

    _onCruisineTypeChange(text) {
        let type = text.split(',');
        type.forEach((text) => text.trim());
        let baseInfo = this.props.baseInfo;
        baseInfo.cruisine_type = type;
        this._onChange(baseInfo);
        let err = '';
        if (!text)
            err = 'cruisine type cannot be empty';
        this.setState({cruisineTypeErr: err})
    }

    _onChange(baseInfo) {
        if (this.props.onChange)
            this.props.onChange(baseInfo);
    }

    render() {
        let baseInfo = this.props.baseInfo;
        return (
            <div className={'baseinfo-form form'}>
                <div className={'display-flex'}>
                    <input type='text'
                           required
                           placeholder={'recipe name'}
                           value={baseInfo.recipe_name || ''}
                           onChange={e => this._onNameChange(e.target.value)}/>
                    <InputError error={this.state.nameErr}/>
                </div>
                <div className={'display-flex'}>
                    <input type='text'
                           required
                           placeholder={'image url'}
                           value={baseInfo.image.source || ''}
                           onChange={e => this._onImageURLChange(e.target.value)}/>
                    <InputError error={this.state.imageURLErr}/>
                </div>
                <div className={'display-flex'}>
                    <input type='number'
                           required
                           placeholder={'cook time in minutes'}
                           value={baseInfo.cook_time || ''}
                           onChange={e => this._onCookTimeChange(e.target.value)}/>
                    <InputError error={this.state.cookTimeErr}/>
                </div>
                <div className={'display-flex'}>
                    <input type='text'
                           required
                           placeholder={'dietary (separated by comma)'}
                           value={baseInfo.dietary || ''}
                           onChange={e => this._onDietaryChange(e.target.value)}/>
                    <InputError error={this.state.dietaryErr}/>
                </div>
                <div className={'display-flex'}>
                    <input type='text'
                           required
                           placeholder={'meal type (separated by comma)'}
                           value={baseInfo.meal_type || ''}
                           onChange={e => this._onMealTypeChange(e.target.value)}/>
                    <InputError error={this.state.mealTypeErr}/>
                </div>
                <div className={'display-flex'}>
                    <input type='text'
                           required
                           placeholder={'cruisine type (separated by comma)'}
                           value={baseInfo.cruisine_type || ''}
                           onChange={e => this._onCruisineTypeChange(e.target.value)}/>
                    <InputError error={this.state.cruisineTypeErr}/>
                </div>
            </div>
        )
    }
}

export class IngredientFormCell extends React.Component {
    constructor(props){
        super(props);
        this.state={
            err: 'ingredient cannot be empty',
            nameErr: 'ingredient cannot be empty',
            quantityErr: 'quantity cannot be empty',
        }
    }


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
