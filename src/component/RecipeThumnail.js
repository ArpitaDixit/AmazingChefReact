/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";

export class RecipeThumnail extends React.Component {
    render() {
        let recipe = this.props.recipe;
        let index = this.props.index;
        return (
            <div onClick={() => this.props.onClick({recipe: recipe, index: index})}
                 className={'recipe-thumb shadow'}>
                <h1>{recipe.recipe_name.replace('_', ' ')}</h1>
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