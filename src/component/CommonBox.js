import React, {Component} from "react";
import "../style/index.css";

export class StyledBox extends Component {

    render() {
        return (
            <div id={this.props.id} className={'box main-background box-hightlight shadow '}>
                {this.props.children}
            </div>
        )
    }
}

export class WhiteBox extends React.Component {

    render() {
        let {className} = this.props;
        return (
            <div id={this.props.id} className={'white-box white-trans-background shadow ' + className}>
                {this.props.children}
            </div>
        )
    }
}

