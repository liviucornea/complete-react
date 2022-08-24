import {useEffect, useState} from "react";
/*
this is a custom http hook that can be used across functional components in React app
it accepts url like parameters and dependencies 'to know' when to be extecuted. For that purpose, internaly
it is using useEffect from React
 */
export const useHttp = <T>(url: string, method:string, dependencies: any)=>{
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] =  useState(null);

    useEffect(() => {
        setIsLoading(true);
        console.log('Sending http request to url: ' + url);
        fetch(url,
            {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                mode: "cors"
            }
            ).then(response => {
            if(!response.ok) {
                throw  new Error('Failed to fetch data');
             }
            return response.json();
        }).then( data =>{
            setIsLoading(false);
            setFetchedData(data);
        }).catch(err => {
            console.log(err);
            setIsLoading(false);
        })
        // eslint-disable-next-line 
    }, dependencies);
    return [isLoading, fetchedData as T | null];
}