import React from 'react';

const Collection = ({collections}) => {
    return (
        <div>
            {collections.map((collection) => 
            <option className="dropdown-item" value={collection.title}>
                {collection.title}
              </option>
            )}
        </div>
    )
}

export default Collection;