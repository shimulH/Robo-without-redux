import React from 'react';

const SearchBox = ({searchField, search}) => {
    return (
        <div className="pa2">
            <input 
                onChange={search}
                type="submit"
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search robots" 
            />
        </div>
    );
};

export default SearchBox;