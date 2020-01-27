import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import Alert from "react-bootstrap/Alert";
declare const BASE_URL: string;
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers = { "Access-Control-Allow-Origin": "*" };

export const HttpInterceptor = () => {
    const [message, setErrMessage] = useState("");
    const [show, setShow] = useState(false);
    const makeErrorMessage = (err: AxiosError) => {
        if (err.response) {
            return `${err.response.status}: ${err.response.statusText}. URL: ${err.response.config.url}`;
        } else {
            return err.message;
        }
    };
    useEffect(() => {
        axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (!(error.response && error.response.status)) {
                    setErrMessage(makeErrorMessage(error));
                    setShow(true);
                    return Promise.reject(error);
                }
                switch (error.response.status) {
                    case 404:
                        setErrMessage(makeErrorMessage(error));
                        setShow(true);
                        break;
                    case 503:
                        setErrMessage(makeErrorMessage(error));
                        setShow(true);
                        break;
                    default:
                        break;
                }
                return Promise.reject(error);
            }
        );
    });

    if (show) {
        return (
            <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                {message}
            </Alert>
        );
    } else {
        return null;
    }
};
