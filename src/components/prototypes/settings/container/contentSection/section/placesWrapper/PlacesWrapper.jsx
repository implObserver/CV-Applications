import { Place } from "./place/Place";
import { State } from "../../../../../state/State";
import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";

export const PlacesWrapper = () => {
    const props = usePropsContext();
    const style = State('unvisible__places-wrapper', 'visible__places-wrapper', props.defaultStates.placesStyle);
    Object.assign(props.states, { placesStyle: style })

    const places = Object.entries(props.objects.places);

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
