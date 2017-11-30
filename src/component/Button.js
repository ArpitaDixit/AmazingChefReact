/**
 * Created by khoale on 11/25/2017.
 */
import React, {Component} from "react";

/**
 * button of AMZC style, accept onClick props
 */
export class Button extends Component {
    render() {
        return (
            <div className={'button box-hightlight shadow main-background tabitem'}
                 onClick={this.props.onClick}>
                <a>{this.props.children}</a>
            </div>
        )
    }
}

export class NormalButton extends React.Component{
    render() {
        return (
            <div className={'tabitem normal-but'}
                 onClick={this.props.onClick}>
                <a>{this.props.children}</a>
            </div>
        )
    }
}