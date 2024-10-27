import {ISearchBoxProps} from "../model/types.ts";
import {ChangeEvent, useState} from "react";

const SearchBox = ({ mapObjects, onObjectSelect, renderList }: ISearchBoxProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredObjects = mapObjects.filter(obj =>
        obj.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const clearInput = () => {
        setSearchTerm('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            {renderList(filteredObjects, onObjectSelect)}
            <button
                onClick={clearInput}
                className="clear-button"
                disabled={!searchTerm}
            >
                Clear
            </button>
        </div>
    );
}

export default SearchBox;