import React from "react";
import {RecipeThumnail} from "./component/RecipeThumnail";
import {FlatList} from "./component/FlatList";
import {RecipeViewModal} from "./RecipeViewModal";
import {Button} from "./component/Button";

export class RecipeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: this.props.recipes,
            bbb: {
            "_id": "59fb73af61b16d3448b017ac",
                "recipe_name": "omlette",
                "ingredients": [
                {
                    "name": "egg",
                    "quantity": "2",
                    "metric": "count"
                },
                {
                    "name": "water",
                    "quantity": "2",
                    "metric": "Tbsp"
                },
                {
                    "name": "salt",
                    "quantity": "1/8",
                    "metric": "tsp"
                },
                {
                    "name": "pepper",
                    "quantity": "1",
                    "metric": "dash"
                },
                {
                    "name": "butter",
                    "quantity": "1",
                    "metric": "tsp"
                },
                {
                    "name": "optional",
                    "note": "shredded cheese, finely chopped ham, baby spinach",
                    "quantity": "1/2",
                    "metric": "cup"
                }
            ],
                "image": {
                "type": "url",
                    "source": "https://www.incredibleegg.org/wp-content/uploads/basic-french-omelet-930x550.jpg"
            },
            "instruction": [
                "BEAT eggs, water, salt and pepper in small bowl until blended.",
                "HEAT butter in 7 to 10-inch non-stick omelette pan or skillet over medium-high heat until hot. TILT pan to coat bottom. POUR IN egg mixture. Mixture should set immediately at edges.",
                "GENTLY PUSH cooked portions from edges toward the centre with inverted turner so that uncooked eggs can reach the hot pan surface. CONTINUE cooking, tilting pan and gently moving cooked portions as needed.",
                "When top surface of eggs is thickened and no visible liquid egg remains, PLACE filling on one side of the omelette. FOLD omelette in half with turner. With a quick flip of the wrist, turn pan and INVERT or SLIDE omelette onto plate. SERVE immediately."
            ],
                "cruisine_type": [
                "France"
            ],
                "meal_type": [
                "breakfast",
                "light"
            ],
                "dietary": [
                "normal"
            ],
                "cook_time": 10
        },
            bogus: [
                {
                    "_id": "59fb73af61b16d3448b017ac",
                    "recipe_name": "omlette",
                    "ingredients": [
                        {
                            "name": "egg",
                            "quantity": "2",
                            "metric": "count"
                        },
                        {
                            "name": "water",
                            "quantity": "2",
                            "metric": "Tbsp"
                        },
                        {
                            "name": "salt",
                            "quantity": "1/8",
                            "metric": "tsp"
                        },
                        {
                            "name": "pepper",
                            "quantity": "1",
                            "metric": "dash"
                        },
                        {
                            "name": "butter",
                            "quantity": "1",
                            "metric": "tsp"
                        },
                        {
                            "name": "optional",
                            "note": "shredded cheese, finely chopped ham, baby spinach",
                            "quantity": "1/2",
                            "metric": "cup"
                        }
                    ],
                    "image": {
                        "type": "url",
                        "source": "https://www.incredibleegg.org/wp-content/uploads/basic-french-omelet-930x550.jpg"
                    },
                    "instruction": [
                        "BEAT eggs, water, salt and pepper in small bowl until blended.",
                        "HEAT butter in 7 to 10-inch non-stick omelette pan or skillet over medium-high heat until hot. TILT pan to coat bottom. POUR IN egg mixture. Mixture should set immediately at edges.",
                        "GENTLY PUSH cooked portions from edges toward the centre with inverted turner so that uncooked eggs can reach the hot pan surface. CONTINUE cooking, tilting pan and gently moving cooked portions as needed.",
                        "When top surface of eggs is thickened and no visible liquid egg remains, PLACE filling on one side of the omelette. FOLD omelette in half with turner. With a quick flip of the wrist, turn pan and INVERT or SLIDE omelette onto plate. SERVE immediately."
                    ],
                    "cruisine_type": [
                        "France"
                    ],
                    "meal_type": [
                        "breakfast",
                        "light"
                    ],
                    "dietary": [
                        "normal"
                    ],
                    "cook_time": 10
                },
                {
                    "_id": "59fb73af61b16d3448b017ad",
                    "recipe_name": "potato_curry",
                    "ingredients": [
                        {
                            "name": "potato",
                            "note": "peeled and cubed",
                            "quantity": "4",
                            "metric": "count"
                        },
                        {
                            "name": "vegetable oil",
                            "quantity": "2",
                            "metric": "Tbsp"
                        },
                        {
                            "name": "yellow onion",
                            "note": "diced",
                            "quantity": "1",
                            "metric": "count"
                        },
                        {
                            "name": "cloves garlic",
                            "note": "minced",
                            "quantity": "3",
                            "metric": "dash"
                        },
                        {
                            "name": "ground cumin",
                            "quantity": "2",
                            "metric": "tsp"
                        },
                        {
                            "name": "cayenne pepper",
                            "quantity": "1.5",
                            "metric": "tsp"
                        },
                        {
                            "name": "curry powder",
                            "quantity": "4",
                            "metric": "tsp"
                        },
                        {
                            "name": "Garam masala",
                            "quantity": "4",
                            "metric": "tsp"
                        },
                        {
                            "name": "fresh ginger",
                            "note": "peeled and minced",
                            "quantity": "1",
                            "metric": "inch"
                        },
                        {
                            "name": "peas",
                            "quantity": "1",
                            "metric": "cup"
                        },
                        {
                            "name": "salt",
                            "quantity": "2",
                            "metric": "tsp"
                        },
                        {
                            "name": "tomatoes",
                            "note": "diced",
                            "quantity": "1",
                            "metric": "cup"
                        },
                        {
                            "name": "coconut milk",
                            "quantity": "1",
                            "metric": "cup"
                        }
                    ],
                    "image": {
                        "type": "url",
                        "source": "https://yummyindiankitchen.com/wp-content/uploads/2017/04/aloo-matar-ki-sabzi.jpg"
                    },
                    "instruction": [
                        "Pace potatoes into a large pot and cover with salted water. Bring to a boil over high heat, then reduce heat to medium-low, cover, and simmer until just tender, about 15 minutes. Drain and allow to steam dry for a minute or two.",
                        "Meanwhile, heat the vegetable oil in a large skillet over medium heat. Stir in the onion and garlic; cook and stir until the onion has softened and turned translucent, about 5 minutes. Season with cumin, cayenne pepper, curry powder, garam masala, ginger, and salt; cook for 2 minutes more. Add the tomatoes, and potatoes. Pour in the coconut milk, and bring to a simmer. Simmer 5 to 10 minutes before serving."
                    ],
                    "cruisine_type": [
                        "Indian"
                    ],
                    "meal_type": [
                        "lunch",
                        "dinner",
                        "heavy"
                    ],
                    "dietary": [
                        "normal",
                        "vegetarian"
                    ],
                    "cook_time": 20
                },
                {
                    "_id": "59fb73af61b16d3448b017ab",
                    "recipe_name": "omlette",
                    "ingredients": [
                        {
                            "name": "egg",
                            "quantity": "2",
                            "metric": "count"
                        },
                        {
                            "name": "water",
                            "quantity": "2",
                            "metric": "Tbsp"
                        },
                        {
                            "name": "salt",
                            "quantity": "1/8",
                            "metric": "tsp"
                        },
                        {
                            "name": "pepper",
                            "quantity": "1",
                            "metric": "dash"
                        },
                        {
                            "name": "butter",
                            "quantity": "1",
                            "metric": "tsp"
                        },
                        {
                            "name": "optional",
                            "note": "shredded cheese, finely chopped ham, baby spinach",
                            "quantity": "1/2",
                            "metric": "cup"
                        }
                    ],
                    "image": {
                        "type": "url",
                        "source": "https://www.incredibleegg.org/wp-content/uploads/basic-french-omelet-930x550.jpg"
                    },
                    "instruction": [
                        "BEAT eggs, water, salt and pepper in small bowl until blended.",
                        "HEAT butter in 7 to 10-inch non-stick omelette pan or skillet over medium-high heat until hot. TILT pan to coat bottom. POUR IN egg mixture. Mixture should set immediately at edges.",
                        "GENTLY PUSH cooked portions from edges toward the centre with inverted turner so that uncooked eggs can reach the hot pan surface. CONTINUE cooking, tilting pan and gently moving cooked portions as needed.",
                        "When top surface of eggs is thickened and no visible liquid egg remains, PLACE filling on one side of the omelette. FOLD omelette in half with turner. With a quick flip of the wrist, turn pan and INVERT or SLIDE omelette onto plate. SERVE immediately."
                    ],
                    "cruisine_type": [
                        "France"
                    ],
                    "meal_type": [
                        "breakfast",
                        "light"
                    ],
                    "dietary": [
                        "normal"
                    ],
                    "cook_time": 10
                },
                {
                    "_id": "59fb73af61b16d3448b017ae",
                    "recipe_name": "omlette",
                    "ingredients": [
                        {
                            "name": "egg",
                            "quantity": "2",
                            "metric": "count"
                        },
                        {
                            "name": "water",
                            "quantity": "2",
                            "metric": "Tbsp"
                        },
                        {
                            "name": "salt",
                            "quantity": "1/8",
                            "metric": "tsp"
                        },
                        {
                            "name": "pepper",
                            "quantity": "1",
                            "metric": "dash"
                        },
                        {
                            "name": "butter",
                            "quantity": "1",
                            "metric": "tsp"
                        },
                        {
                            "name": "optional",
                            "note": "shredded cheese, finely chopped ham, baby spinach",
                            "quantity": "1/2",
                            "metric": "cup"
                        }
                    ],
                    "image": {
                        "type": "url",
                        "source": "https://www.incredibleegg.org/wp-content/uploads/basic-french-omelet-930x550.jpg"
                    },
                    "instruction": [
                        "BEAT eggs, water, salt and pepper in small bowl until blended.",
                        "HEAT butter in 7 to 10-inch non-stick omelette pan or skillet over medium-high heat until hot. TILT pan to coat bottom. POUR IN egg mixture. Mixture should set immediately at edges.",
                        "GENTLY PUSH cooked portions from edges toward the centre with inverted turner so that uncooked eggs can reach the hot pan surface. CONTINUE cooking, tilting pan and gently moving cooked portions as needed.",
                        "When top surface of eggs is thickened and no visible liquid egg remains, PLACE filling on one side of the omelette. FOLD omelette in half with turner. With a quick flip of the wrist, turn pan and INVERT or SLIDE omelette onto plate. SERVE immediately."
                    ],
                    "cruisine_type": [
                        "France"
                    ],
                    "meal_type": [
                        "breakfast",
                        "light"
                    ],
                    "dietary": [
                        "normal"
                    ],
                    "cook_time": 10
                },],
            showModal: false,
            modalRecipe: {},
        }
    }

    _onThumbnailClick = (recipe) => {
        this.setState({showModal: true, modalRecipe: recipe})
    };

    _renderRecipeThumbnail = item => <RecipeThumnail recipe={item}
                                                     onClick={this._onThumbnailClick}/>


    render() {
        let recipes = this.state.bogus;
        if (this.state.recipes && this.state.recipes.length > 0)
            recipes = this.state.recipes;
        return (
            <div className={'recipes-container'}>
                <h1>RECIPES</h1>
                <FlatList
                    data={recipes}
                    keyExtractor={item => item._id}
                    renderItem={this._renderRecipeThumbnail}/>
                <RecipeViewModal
                    isOpen={this.state.showModal}
                    onRequestClose={() => this.setState({showModal: false})}
                    recipe={this.state.modalRecipe}/>

                <Button onClick={() => {
                    let bogus = this.state.bogus;
                    bogus = bogus.concat(this.state.bbb);
                    this.setState({bogus: bogus});
                }}>Load More</Button>
            </div>
        )
    }
}