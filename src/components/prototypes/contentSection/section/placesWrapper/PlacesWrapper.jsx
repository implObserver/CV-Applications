import { useState } from "react";
import { Place } from "./place/Place";
import { State } from "../../../toggle/Toggle";

export const PlacesWrapper = ({ props }) => {
    const [places] = useState([Place[0]]);
    const style = State('unvisible__places-wrapper', 'visible__places-wrapper');
    Object.assign(props.states, { placesStyle: style });

    return (
        <>
            <div className={`places__wrapper ${style.getState()} ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
                {(() => {
                    return (
                        <>
                            {
                                places.map((place) => {
                                    return (
                                        <>
                                            {place}
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })()}
            </div>
        </>
    )
}