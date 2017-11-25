import React, {Component} from "react";

export class Button extends Component {
    render() {
        return (
            <div className={'button box-hightlight shadow main-background tabitem'}
                 onClick={() => this.props.onClick()}>
                <a>{this.props.children}</a>
            </div>
        )
    }
}