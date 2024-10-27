import {mapObjects} from "../../../shared/configs";
import {useState} from "react";
import MapView from "./MapView.tsx";
import {FilterMapList} from "../../../features/map";
import {IMapObject} from "../../../shared/map.interface.ts";
import {SearchBox} from "../../../features/searchBox";

const MapOverview = () => {
    const [selectedObjectId, setSelectedObjectId] = useState<string | null>(null);

    const handleObjectSelect = (id: string) => {
        setSelectedObjectId(id);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SearchBox
                mapObjects={mapObjects}
                onObjectSelect={handleObjectSelect}
                renderList={(
                    filteredObjects: IMapObject[],
                ) => (
                    <FilterMapList
                        filteredObjects={filteredObjects}
                        onObjectSelect={handleObjectSelect}
                        selectedObjectId={selectedObjectId}
                    />
                )}
            />
            <MapView mapObjects={mapObjects} selectedObjectId={selectedObjectId} />
        </div>
    );
};

export default MapOverview;