import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

export default () => {
    let [loaded, setLoaded] = useState(false);
    let [matches, setMatches] = useState([]);

    useEffect(() => {
        if(!loaded) {
            API.getMatches()
            .then(res => setMatches(res.data))
            setLoaded(true);
        }
    })

    return (
        <>
            {
            loaded && <div>
                        Your matches:
                        {matches}
                    </div>
            }
        </>
    );
}
