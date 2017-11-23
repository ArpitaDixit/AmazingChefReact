import React, {Component} from "react";

export class Button extends Component{

    render(){
        return(
            <div className={'button box-hightlight shadow main-background tabitem'}>
                {this.props.children}
            </div>
        )
    }
}