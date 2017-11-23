import React from "react";

export class IngreButton extends React.Component {

    _getSelectedClass() {
        if (this.props.selected) {
            return 'ingr-button-selected shadow';
        }
    }

    _onClick() {
        let onClick = this.props.onClick;
        onClick({index: this.props.index});
    }

    render() {
        let className = 'ingr-button ' + this._getSelectedClass();

        return (
            <div className={className}
                 onClick={() => {this._onClick()}}>
                {this.props.title}
            </div>
        )
    }
}