import { Place } from "./place/Place";
import { State } from "../../../../../state/State";
import { Props } from "../../../../../../dataManagments/props/Global";

export const PlacesWrapper = ({ id }) => {
    const props = Props.states[id];
    const style = State('unvisible__places-wrapper', 'visible__places-wrapper');
    const places = Object.entries(props.places);

    Object.assign(props.states, { placesStyle: style, places: places })

    const fill = places.map((place) => {
        return <Place key={place[1].getKey()} props={props} parameters={place[1]} id={id}></Place>
    })

    return (
        <>
            <div className={`places__wrapper ${style.getState()} ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
                {fill}
            </div>
        </>
    )
}