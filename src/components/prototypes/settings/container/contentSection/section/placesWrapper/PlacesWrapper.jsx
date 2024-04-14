import { Place } from "./place/Place";
import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";
import { DropdownListsHandlers } from "../../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { Ref } from "../../../../../ref/Ref";
import { State } from "../../../../../state/State";

export const PlacesWrapper = () => {
    const props = usePropsContext();
    const id = `${props.id}__places`;
    const ref = Ref(['unvisible__places-wrapper', 'visible__places-wrapper']);
    const update = State();

    Object.assign(props.dropdownLists[id].states.containerRef, ref);
    Object.assign(props.dropdownLists[id].states, { containerUpdate: update });
    DropdownListsHandlers.functions.addPlacesHandler(id, props.dropdownLists[id]);

    const places = Object.entries(props.dropdownLists[id].objects.elements);

    const fill = places.map((place) => {
        return <Place key={place[1].getKey()} parameters={place[1]}></Place>
    })

    return (
        <>
            <div ref={ref.getRef()} className={`places__wrapper`}>
                {fill}
            </div>
        </>
    )
}
