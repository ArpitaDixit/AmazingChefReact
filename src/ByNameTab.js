import React from "react";
import {StyledBox, WhiteBox} from "./component/CommonBox";
import {IngreButton} from "./component/IngreButton";
import {IngredientSearchSuggestion} from "./component/IngredientSearchSuggestion";
import {FlatList} from "./component/FlatList";
import {RecipeContainer} from "./RecipeContainer";
import {Button} from "./component/Button";
import {sendRequest} from "./service/BaseServices";
import BaseContainer from "./BaseContainer";

export class ByNameTab extends BaseContainer {
    constructor(props) {
        super(props);
        this.state = {
            nameSelected: '',
            recipes: []
        }
    }

    _renderButton = (item, index) => {
        let onClick = this._ingrButClick.bind(this);
        return (
            <IngreButton
                index={index}
                title={item.name}
                selected={item.selected}
                onClick={onClick}
            />
        )
    };

    _clearIngrBox() {
        if (this.state.ingrSelected.length === 0)
            return;
        this.setState({nameSelected : ''});
    }

    _searchbyname=()=>{
        let name=this.state.nameSelected;
        console.log(this.state.nameSelected);
        if(name.length > 0){
            let url=`/search?name=${name}`;
            sendRequest('get',url, null,null, this,'search');
        }
    };

    onSuccess(res, tag) {
        if (tag === 'search') {
            console.log("inside on succcess");
            this.setState({recipes: res});
        }
    }

    render(){

        return (
            <StyledBox>
                <div style={{display: 'flex'}}>
                    <div>
                        <label>ByName</label>
                        <input type='text'
                               onChange={e => this.setState({ nameSelected: e.target.value })}/>

                        <Button onClick={this._searchbyname}> SEARCH </Button>
                    </div>
                </div>

                <RecipeContainer
                    recipes={this.state.recipes}/>
            </StyledBox>
        )

    }

}