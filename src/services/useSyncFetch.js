import { useState, useEffect } from 'react';

const useSyncFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
    }, [url]) 

    return data;
}
 
export default useSyncFetch;