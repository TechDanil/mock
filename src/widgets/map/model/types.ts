import {IMapObject} from "../../../shared/map.interface.ts";

export interface IMapViewProps {
    mapObjects: IMapObject[];
    selectedObjectId: string | null;
}