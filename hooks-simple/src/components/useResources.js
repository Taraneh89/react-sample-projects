import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResource] = useState([]);

    useEffect(
        () => {
            (async () => {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/${resource}`);
                setResource(response.data);
            })();
        },
        [resource]
    );
    return resources;
};
export default useResources;