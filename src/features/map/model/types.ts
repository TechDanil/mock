import {IMapObject} from "../../../shared/map.interface.ts";

export interface IFilterMapListProps {
    filteredObjects: IMapObject[]
    onObjectSelect: (id: string) => void,
    selectedObjectId: string | null
}