/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import {RecipeThumnail} from "./component/RecipeThumnail";
import {FlatList} from "./component/FlatList";
import {RecipeViewModalBackForward} from "./RecipeViewModalBackForward";


/**
 * Recipe Container is responsible for managing recipes.
 * it use RecipeViewModalBackForward and internally support viewing next or previous recipe
 */
export class RecipeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalRecipe: {},
            modalRecipeIndex: -1,
        }
    }

    _onThumbnailClick = ({recipe, index}) => {
        this.setState({
            showModal: true,
            modalRecipe: recipe,
            modalRecipeIndex: index
        })
    };

    _renderRecipeThumbnail = (item, index) => <RecipeThumnail recipe={item}
                                                              onClick={this._onThumbnailClick}
                                                              index={index}/>;

    _onNextRecipeClick() {
        let nextIndex = this.state.modalRecipeIndex + 1;
        let recipe = this.props.recipes[nextIndex];
        if (recipe) {
            this.setState({modalRecipe: recipe, modalRecipeIndex: nextIndex});
        }
    }

    _onPrevRecipeClick() {
        let prevIndex = this.state.modalRecipeIndex - 1;
        let recipe = this.props.recipes[prevIndex];
        if (recipe) {
            this.setState({modalRecipe: recipe, modalRecipeIndex: prevIndex});
        }
    }

    render() {
        let recipes = this.props.recipes;
        return (
            <div className={'recipes-container'}>
                <h1>RECIPES</h1>
                <FlatList
                    data={recipes}
                    keyExtractor={item => item._id}
                    renderItem={(item, index) =>
                        <RecipeThumnail recipe={item}
                                        onClick={this._onThumbnailClick}
                                        index={index}/>}/>
                <RecipeViewModalBackForward
                    isOpen={this.state.showModal}
                    onRequestClose={() => this.setState({showModal: false})}
                    recipe={this.state.modalRecipe}
                    next={this._onNextRecipeClick.bind(this)}
                    prev={this._onPrevRecipeClick.bind(this)}
                />
            </div>
        )
    }
}