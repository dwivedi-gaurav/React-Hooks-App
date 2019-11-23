import React from 'react';
import useResources from './useResources';
import UserList from './UserList';

const renderList=(resources)=>{
    return resources.map((resource)=>{
        return(
            <ul key={resource.id}>
                <li>{resource.title}</li>
            </ul>
        )
    })    
}
const ResourceList=(props)=>{

    const resources=useResources(props.resource);

    if(props.resource==='users'){
        return <UserList />;
    }

    return(
        <div>
            <h3>{props.resource}</h3>
            {renderList(resources)}
        </div>
    )
}
export default ResourceList;