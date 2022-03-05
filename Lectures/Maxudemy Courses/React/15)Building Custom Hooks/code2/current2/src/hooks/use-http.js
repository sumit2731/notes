import {useState, useEffect} from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    async function makeApiCall(url,reqObj = {}) {
        setIsLoading(true);
        setError(null);  
        try {
            const response = await fetch(url,reqObj);
            if(!response.ok) {
                throw new Error("Request Failed");
            }
            const data = await response.json();
            setIsLoading(false);
            return data;
        }
        catch(error) {
            setIsLoading(false);
            setError(error.message);
        }
    }
    
    return [isLoading, error,makeApiCall];
};

export default useHttp;