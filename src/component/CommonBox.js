import React, {Component} from "react";
import "../style/index.css";

export class StyledBox extends Component {

    render() {
        let className = this.props.className;
        return (
            <div id={this.props.id} className={'box main-background box-hightlight shadow slider ' + className}>
                {this.props.children}
            </div>
        )
    }
}

export class WhiteBox extends React.Component {

    render() {
        let className = this.props.className;
        return (
            <div id={this.props.id} className={'white-box white-trans-background shadow ' + className}>
                {this.props.children}
            </div>
        )
    }
}

