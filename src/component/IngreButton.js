/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
// import MdRemoveCircle from "react-icons/lib/md/remove-circle";
import FaClose from "react-icons/lib/fa/close";
import ReactTooltip from "react-tooltip";

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

    _getTip() {
        if (!this.props.selected) {
            return <span>recipes containing <span style={{color:'#FD9700'}}>{this.props.title}</span> will be excluded</span>

        } else {
            return <span>click to exclude all recipes containing <span style={{color:'#FD9700'}}>{this.props.title}</span></span>
        }
    }

    render() {
        let className = 'ingr-button ' + this._getSelectedClass();
        let tooltipId = `ingrButtion${this.props.title}`;
        return (
            <div data-tip
                 data-for={tooltipId}
                 className={className}
                 onClick={(e) => {
                     this._onClick(e, 'click')
                 }}>
                <p style={{color: 'white'}}>{this.props.title}</p>
                <FaClose
                    className={'ingr-button-remove'}
                    onClick={(e) => this._onClick(e, 'remove')}/>
                <ReactTooltip id={tooltipId} getContent={this._getTip.bind(this)}/>
            </div>
        )
    }
}