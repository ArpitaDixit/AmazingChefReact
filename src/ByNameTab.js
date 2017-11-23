import React from "react";
import {StyledBox} from "./component/CommonBox";
import {RecipeContainer} from "./RecipeContainer";

export class ByNameTab extends React.Component {

    render() {
        return (
            <StyledBox>
                By Name
                <RecipeContainer/>
            </StyledBox>
        )
    }
}