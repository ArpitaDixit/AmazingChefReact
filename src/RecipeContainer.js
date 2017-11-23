import React from "react";

export class RecipeContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            recipes: this.props.recipes,
        }
    }

    render() {
        return (
            <div className={'recipes-container'}>
                Recipe Container
            </div>
        )
    }
}