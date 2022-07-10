import { useEffect, useReducer, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const getAccessToken = (): string | null => sessionStorage.getItem('access_token');

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json'
    }
});

const getDataReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case 'GET_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            };
        case 'GET_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            throw new Error();
    }
};

export const useGetDataApi = (url: string, initialConfig: AxiosRequestConfig = {}, initialData: any = null) => {
    const [config, setConfig] = useState(initialConfig);

    const [state, dispatch] = useReducer(getDataReducer, {
        isLoading: false,
        isError: false,
        data: initialData
    });

    useEffect(() => {
        const getData = async () => {
            dispatch({ type: 'GET_INIT' });
            try {
                const result = await api.get(url, config);
                dispatch({ type: 'GET_SUCCESS', payload: result.data });
            } catch (error) {
                dispatch({ type: 'GET_FAILURE' });
            }
        };
        getData();
    }, [url, config]);

    return [state, config, setConfig];
};
