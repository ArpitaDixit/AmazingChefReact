/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
// import MdRemoveCircle from "react-icons/lib/md/remove-circle";
import FaClose from "react-icons/lib/fa/close";

export class IngreButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {removed: false}
    }

    _getSelectedClass() {
        if (this.props.selected) {
            return 'ingr-button-selected shadow';
        }
    }

    _onClick(e, tag) {
        e.stopPropagation();
        if (tag === 'click' && this.props.onClick)
                this.props.onClick({index: this.props.index});
        else if (tag === 'remove' && this.props.onClose)
                this.props.onClose({index: this.props.index});
    }

    render() {
        let className = 'ingr-button ' + this._getSelectedClass();

        return (
            <div className={className}
                 onClick={(e) => {
                     this._onClick(e, 'click')
                 }}>
                <p>{this.props.title}</p>
                <FaClose
                    className={'ingr-button-remove'}
                    onClick={(e) => this._onClick(e, 'remove')}/>

            </div>
        )
    }
}