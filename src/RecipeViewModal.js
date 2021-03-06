/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import Modal from "react-modal";
import {RecipeView} from "./component/RecipeView";

export class RecipeViewModal extends React.Component {

     render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                contentLabel={'RecipeView'}
                className={'box box-hightlight main-background recipe-view-modal scrollbar'}
                overlayClassName={'common-modal-overlay'}>

                <RecipeView
                recipe={this.props.recipe}/>

            </Modal>
        )
    }
}