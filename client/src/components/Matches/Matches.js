import React, { useState, useEffect } from 'react';

export default () => {
    let [loaded, setLoaded] = useState(false);
    let [matches, setMatches] = useState([]);

    useEffect(() => {
        if(!loaded) {
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
