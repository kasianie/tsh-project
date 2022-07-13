import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { api } from './ApiInstance';
import { ApiState } from './Api.types';

export function useGetDataApi<T>(
    url: string,
    initialConfig: AxiosRequestConfig = {},
    initialData: T | null = null
): [T | null, ApiState, AxiosRequestConfig, (config: AxiosRequestConfig) => void] {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [config, setConfig] = useState({ ...initialConfig });

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const result = await api.get(url, config);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        getData();
    }, [url, config]);

    return [data, { isLoading, isError }, config, setConfig];
}
