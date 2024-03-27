import { Place } from "./place/Place";
import { State } from "../../../toggle/Toggle";
import { generateKey } from "../../../../helper/KeyGenerator";

export const PlacesWrapper = ({ props }) => {
    const style = State('unvisible__places-wrapper', 'visible__places-wrapper');
    const places = Object.entries(props.places);
    Object.assign(props.states, { placesStyle: style, places: places });

    const fill = places.map((place) => {
        return <Place key={place[1].getKey()} props={props} parameters={place[1]}></Place>
    })

    return (
        <>
            <div className={`places__wrapper ${style.getState()} ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
                {fill}
            </div>
        </>
    )
}