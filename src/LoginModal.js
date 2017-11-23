import React from "react";
import Modal from "react-modal";
export class LoginModal extends React.Component {

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                contentLabel={'Login'}
                className={'box box-hightlight main-background'}>
                Login
            </Modal>
        )
    }
}