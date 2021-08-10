import React, {FC} from 'react';

interface PhotoSearchInputProps {
    query: string
    setQuery: (query: string)=> void
    setSearch: (search: string) => void
}

const PhotoSearchInput:FC<PhotoSearchInputProps> = ({query, setQuery, setSearch}) => {

    return (
        <div>
            <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)}/>
            <div className="accept-btn" onClick={()=> setSearch(query)}>Искать</div>
        </div>
    );
};

export default PhotoSearchInput;