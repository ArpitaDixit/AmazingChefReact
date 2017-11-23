/**
 * Created by lamtran on 8/23/17.
 */
import React from "react";
import {LOG} from "./utils/Heplers";

export default class BaseContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    componentDidMount() {
        LOG(this, 'componentDidMount');
    }

    onSuccess(res, tag) {
        LOG(this, 'on suscess ----- ' + JSON.stringify(res) + " with tag: " + tag);
        this.setLoading(false);
    }

    onError(error, tag) {
        if (error.code) {
            let errorCode = error.code;
            let errorMessage = error.message;
            LOG(this, "on err ----- with status code:" + errorCode + "\n and message:"
                + JSON.stringify(errorMessage) + " with tag: " + tag);
        }
        this.setLoading(false);
    }

    setLoading(isLoading) {
        this.setState({isLoading: isLoading})
    }
}
