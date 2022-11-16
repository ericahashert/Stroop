import React from 'react';

    function Search( {searchTerm, onSearchChange }) {
        return (
          <div className="searchbar ml-4 mr-4">
            <div className="field">
                    <div class="control">
                        <input
                            className="input"
                            type="text"
                            id="search"
                            placeholder="Search by substance or symptom"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>
            </div>
        </div>
        );
    }


export default Search;