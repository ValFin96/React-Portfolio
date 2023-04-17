import React from 'react';


function ProjectItem({ image, name, url }) {
    return (
        <div className="projectItem">
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage">
                
            </div>
            <a href={url}>{name}</a>
        </div>
    )
}

export default ProjectItem
