import { Place } from "./place/Place";
import { State } from "../../../toggle/Toggle";

export const PlacesWrapper = ({ props }) => {
    const style = State('unvisible__places-wrapper', 'visible__places-wrapper');
    const places = Object.entries(props.places);
    Object.assign(props.states, { placesStyle: style, places: places });
    return (
        <>
            <div className={`places__wrapper ${style.getState()} ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
                {(() => {
                    console.log(places)
                    return (
                        <>
                            {
                                places.map((place) => {
                                    return (
                                        <>
                                            <Place props={props} parameters={place[1]}></Place>
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