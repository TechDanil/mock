import {PropsWithChildren} from "react";
import {MapContainer} from "react-leaflet";

interface IMapProvider extends PropsWithChildren {}

const MapProvider = ({ children } : IMapProvider) => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13}>
            {children}
        </MapContainer>
    );
};

export default MapProvider;