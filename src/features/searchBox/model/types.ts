import {IMapObject} from "../../../shared/map.interface.ts";

export interface ISearchBoxProps {
    mapObjects: IMapObject[];
    onObjectSelect: (id: string) => void;
    renderList: (
        filteredObjects: IMapObject[],
        onObjectSelect: (id: string) => void,
    ) => JSX.Element;
}