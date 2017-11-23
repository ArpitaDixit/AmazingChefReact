import {LOG} from "../utils/Heplers";

//TODO: switch back to aws address in production
const BASE_URL = '';
export const DEFAULT_TAG = 'default';

export function getBaseURL() {
    return BASE_URL
}

export function buildRequestURL(path) {
    // if (path[0] === '/')
    //     path = path.slice(1);
    return getBaseURL() + path;
}

/**
 * @param method: method of request
 * @param path: path of request, path will be appended to base_url
 * @param request: request body
 * @param response: response model
 * @param context: BaseContainer model
 * @param tag: this extra tag will be passed back to onSuccess method of BaseContainer context
 */
export function sendRequest(method, path, request, response
    , context, tag = DEFAULT_TAG) {
    sendRequestWithHeader(null, method, path, request, response, context, tag);
}

/**
 * @param header: request header
 * @param method: request method
 * @param path: request path will be appended to base_url
 * @param request: request body
 * @param response: response model
 * @param context: BaseContainer model
 * @param tag: this extra tag will be passed back to onSuccess method of BaseContainer context
 */
export function sendRequestWithHeader(header, method, path, request, response
    , context, tag = DEFAULT_TAG) {

    let headers = header || {};
    headers['Accept'] = "application/json";
    headers['Content-Type'] = "application/json";

    LOG(context, `send request --- method: ${method} 
                url: ${path} 
                request: ${JSON.stringify(request)} 
                header -- ${JSON.stringify(headers)}`);
    let req = {
        method: method,
        headers: headers
    };

    if (request) {
        req['body'] = JSON.stringify(request);
    }

    return fetch(buildRequestURL(path), req)
        .then((res) => {
            if (res.status !== undefined && res.status >= 200 && res.status < 400) {
                if (res.status === 204)
                    return {};
                else
                    return res.json();
            } else {
                LOG(context, `fail response: ${res.status} ${JSON.stringify(res)}`);
                context.onError(res, tag);
                throw Error('response status is ' + res.status)
            }
        })
        .then(jsonData => {
            LOG(context, "success response: " + JSON.stringify(jsonData));
            context.onSuccess(jsonData, tag);
        })
        .catch((err) => {
            LOG(context, "An error has happened " + err);
            context.onError(err, tag);
        });
}