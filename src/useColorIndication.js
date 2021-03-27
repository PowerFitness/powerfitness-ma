import { useEffect, useState } from 'react';

export const useColorIndication = (progressPercentage, color) => {
    const [ colorIndicator, setColorIndicator ] = useState(color);
    useEffect(() => {
        progressPercentage > 0
            ? setColorIndicator(color)
            : setColorIndicator('#E0E0E0');
    }, [ progressPercentage ]);
    return colorIndicator;
}

