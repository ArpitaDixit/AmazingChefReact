/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import {LOG} from "./utils/Heplers";

/**
 * a design pattern class for sending data and logging.
 * This class is used in conjunction with ./service/BaseService/SendRequest
 *
 * Child classes need to implement onSuccess and/or onError to handle data after using SendRequest
 *
 */
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

    /**
     *
     * @param res : Object response data
     * @param tag : String of additional tag
     */
    onSuccess(res, tag) {
        LOG(this, 'on suscess ----- ' + JSON.stringify(res) + " with tag: " + tag);
        this.setLoading(false);
    }

    /**
     *
     * @param error : Object error response
     * @param tag : String of additional tag
     */
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
