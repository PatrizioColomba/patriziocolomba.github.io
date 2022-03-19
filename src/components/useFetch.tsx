import { useEffect, useState } from "react";

export function useFetch<T>(url: string, initialState: T): Promise<T> {
    const [response, setResponse] = useState<Promise<T>>(Promise.resolve(initialState));

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(data => setResponse(Promise.resolve(data)));
    }, [url]);

    return response;
}