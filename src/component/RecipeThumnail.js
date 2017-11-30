/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import {NormalButton} from "./Button";
import MdLink from "react-icons/lib/md/link";
import ReactTooltip from "react-tooltip";


export class RecipeThumnail extends React.Component {
    render() {
        let recipe = this.props.recipe;
        let index = this.props.index;
        return (
            <div onClick={() => this.props.onClick({recipe: recipe, index: index})}
                 className={'recipe-thumb shadow'}>
                <div className={'recipe-thumb-header'}>
                    <h1>{recipe.recipe_name.replace('_', ' ')}</h1>
                    <div className={'recipe-thumb-menu'}>
                        <NormalButton onClick={(event) => {
                            event.stopPropagation();
                            window.open(`/recipes/${this.props.recipe._id}`)
                        }}>
                            <MdLink data-tip data-for='recipeNewTab'/>
                            <ReactTooltip id='recipeNewTab'>
                                <span>Open this recipe in new tab with a link</span>
                            </ReactTooltip>
                        </NormalButton>
                    </div>
                </div>
                <div className={'recipe-thumb-body'}>
                    <img src={recipe.image.source} alt={''}/>
                    <div className={'overlay'}>
                        <span>
                            {`Cooktime: ${recipe.cook_time} minutes`} <br/>
                            {`Cuisine: ${recipe.cruisine_type.join(', ')}`} <br/>
                            {`Meal: ${recipe.meal_type.join(', ')}`}<br/>
                            {`Dietary: ${recipe.dietary.join(', ')}`}
                        </span>
                    </div>
                </div>


            </div>
        )
    }
}