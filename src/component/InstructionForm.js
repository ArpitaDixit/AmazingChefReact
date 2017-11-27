import React from "react";
import MdRemoveCircle from "react-icons/lib/md/remove-circle";

export default class InstructionForm extends React.Component {

    _onInstructionChange(instruction){
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
                          value={this.state.instruction || ''}
                          onChange={e => this._onInstructionChange(e.target.value)}/>
                <MdRemoveCircle size={22} style={{color: '#FACF8E'}}
                                onClick={() => this.props.onRemove(this.props.index)}/>
            </div>
        )
    }
}