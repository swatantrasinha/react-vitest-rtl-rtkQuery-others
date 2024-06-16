import { useReducer, useEffect } from 'react';
import { ProductCardProps } from '../../types/products/product';

export type RawDataType = {
  limit: number;
  products: ProductCardProps[];
  skip: number;
  total: number;
}


type State = {
    data: unknown | RawDataType;
    loading: boolean;
    error: null | Error;
};

type Action = { type: 'LOADING' }   | { type: 'SUCCESS'; payload: ProductCardProps[] }   | { type: 'ERROR'; payload: Error };

const dataFetchReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true };
        case 'SUCCESS':
            return { ...state, data: action.payload, loading: false };
        case 'ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            throw new Error();
    }
}
const initialState=     {
    data: [],
    loading: false,
    error: null
}

const useDataFetchQuery = (url: string) => {
    const [state, dispatch] = useReducer(dataFetchReducer, initialState);

    useEffect(() => {
        let didCancel = false;

        async function fetchData() {
            dispatch({ type: 'LOADING' });

            try {
                const response = await fetch(url);
                if (!didCancel) { 
                    const data = await response.json();
                    dispatch({ type: 'SUCCESS', payload: data });
                }
            } catch ( error ) {
                if (!didCancel) {
                    dispatch({ type: 'ERROR', payload: error as Error});
                }
            }
        }

        fetchData();

        return () => {
            didCancel = true;
        };
    }, [url]);

    return { ...state };
}

export default useDataFetchQuery;