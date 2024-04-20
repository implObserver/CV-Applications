import { Place } from "./place/Place";
import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";
import { DropdownListsHandlers } from "../../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { State } from "../../../../../state/State";

export const PlacesWrapper = () => {
    const update = State();
    const props = usePropsContext();
    const id = `${props.id}__places`;
    const list = props.dropdownLists[id];
    const style = State('unvisible__places-wrapper', 'visible__places-wrapper');
    const places = Object.entries(list.objects.elements);

    Object.assign(list.states.containerStyle, style);
    Object.assign(list.states, { containerUpdate: update });

    DropdownListsHandlers.functions.addPlacesHandler(id, props.dropdownLists[id]);

    const fill = places.map((place) => {
        return <Place key={place[1].getKey()} parameters={place[1]}></Place>
    })

    return (
        <>
            <div className={`places__wrapper visible__places-wrapper`}>
                {fill}
            </div>
        </>
    )
}
