import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import {IMapViewProps} from "../model/types.ts";
import 'leaflet/dist/leaflet.css';
import {useLayoutEffect} from "react";
import {MapDetails} from "../../../entities/map";

const MapView = ({ mapObjects, selectedObjectId }: IMapViewProps) => {
    const selectedObject = mapObjects.find(obj => obj.id === Number(selectedObjectId));
    const map = useMap();
    useLayoutEffect(() => {
        if (selectedObject) {
            map.setView([selectedObject.latitude, selectedObject.longitude], 133, { animate: true });
        }
    }, [selectedObject, map]);

    return (
        <MapContainer center={[51.505, -0.09]} zoom={3} style={{ height: '100vh', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {mapObjects.map(object => (
                <MapDetails key={object.id} mapObject={object} selectedObjectId={selectedObjectId} />
            ))}
        </MapContainer>
    );
};

export default MapView;
