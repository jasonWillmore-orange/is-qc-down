import React, {useEffect, useState} from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

export const LivenessIcon = ({livenessURL}) => {
    const aliveCircleIcon = <CheckCircleIcon style={{ fill: '#00FF00' }}/>;
    const errorIcon = <ErrorIcon style={{ fill: '#FF0000' }}/>;

    const [serviceIsAlive, setServiceLiveness] = useState(false);

    // TODO: do this in a useEffect
    // we'll want this data to cause lazy loading of rows rather than waiting
    useEffect(()  => {
        fetch(livenessURL)
        .then((result) => {
            console.log(result)
            if (result.ok) {
            setServiceLiveness(true);
            }
            else {
            setServiceLiveness(false);
            }
        })
        .catch((error) => {
            console.log({error})
            setServiceLiveness(false);
        })
    }, [livenessURL]);

    return serviceIsAlive ?
        aliveCircleIcon:
        errorIcon
};

export default LivenessIcon;
