import React from 'react';
import { useStateValue } from "./StateProvider";


function AllQtnAnswer({projectQtn, projectType, serviceQtn, serviceType}) {
    const [{ frame }] = useStateValue();
    console.log(projectType);
    return (
        <div>
            <ul>
            <li>{frame}</li>
             <li>{projectQtn}</li>
             <li>{projectType}</li>
            </ul>
        </div>
    )
}

export default AllQtnAnswer
