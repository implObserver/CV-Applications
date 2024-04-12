import { Place } from "./place/Place";
import { State } from "../../../../../state/State";
import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";
import { DropdownListsHandlers } from "../../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";

export const PlacesWrapper = () => {
    const props = usePropsContext();
    const id = `${props.id}__places`;
    const style = State('unvisible__places-wrapper', 'visible__places-wrapper', props.defaultStates.placesStyle);
    Object.assign(props.dropdownLists[id].states.elementsStyle, style);
    DropdownListsHandlers.functions.addPlacesHandler(id, props.dropdownLists[id]);

    const places = Object.entries(props.dropdownLists[id].objects.elements);

    const fill = places.map((place) => {
        return <Place key={place[1].getKey()} parameters={place[1]}></Place>
    })

    return (
        <>
            <div className={`places__wrapper ${style.getState()} ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
                {fill}
            </div>
        </>
    )
}
