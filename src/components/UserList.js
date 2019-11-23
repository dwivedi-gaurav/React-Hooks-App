import React from 'react';
import useResources from './useResources';

const renderList=(resources)=>{
    return resources.map((resource)=>{
        return(
            <ul key={resource.id}>
                <li>{resource.name}</li>
            </ul>
        )
    })    
}

const UserList=()=>{
    const resources=useResources('users');
    return(
        <div>
            {renderList(resources)};
        </div>
    )
}

export default UserList;