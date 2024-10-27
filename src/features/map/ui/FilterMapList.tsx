import {IFilterMapListProps} from "../model/types.ts";

const FilterMapList = ({
    filteredObjects,
    onObjectSelect,
    selectedObjectId
}: IFilterMapListProps) => {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {filteredObjects.map((object) => (
                <li
                    key={object.id}
                    onClick={() => onObjectSelect(object.id.toString())}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: Number(selectedObjectId) === object.id ? '#e0f7fa' : 'transparent',
                        padding: '8px',
                        borderRadius: '4px',
                    }}
                >
                    {object.name}
                </li>
            ))}
        </ul>
    );
};

export default FilterMapList;
