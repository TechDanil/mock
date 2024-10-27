import {IMapDetailsProps} from "../../model/types.ts";
import {Marker} from "react-leaflet";

import selectedIcon from "../../../../assets/icons/selected-icon.png"
import unselectedIcon from "../../../../assets/icons/unselected-icon.png"
import L from 'leaflet';

const MapDetails = ({ mapObject, selectedObjectId }: IMapDetailsProps) => {
    const isSelected =  mapObject.id === Number(selectedObjectId)

    return (
        <Marker
            position={[mapObject.latitude, mapObject.longitude]}
            title={mapObject.name}
            icon={
                L.icon({
                    iconUrl: isSelected ? selectedIcon : unselectedIcon,
                    iconSize: [25, 41],
                })
            }
        />
    )
}

export default MapDetails;