import { useState } from "react";
import { Place } from "./place/Place";

export const PlacesWrapper = ({ props }) => {
    const [places, setPlaces] = useState([Place[0]]);
    const style = props.states.open.getState() ? 'visible__places-wrapper' : 'unvisible__places-wrapper';

    const deletePlace = (key) => {
        const place = getPlace(key);
        if (place !== 'none') {
            const newPlaces = [...places];
            const index = newPlaces.indexOf(place);
            if (index > -1) {
                newPlaces.splice(index, 1);
            }
            setPlaces(newPlaces);
        }
    }

    const update = (key, inputValues) => {
        const place = getPlace(key);
        if (place === 'none') {
            addNewPlace(inputValues);
        } else {
            updatePlace(place, inputValues);
        }
    }

    const getPlace = (key) => {
        let newPlace = 'none';
        places.forEach(place => {
            if (place.key.valueOf() == key.valueOf()) {
                newPlace = place;
            }
        })
        return newPlace;
    }

    const addNewPlace = (inputValues) => {
        const newPlace = Place(inputValues);
        const newPlaces = [...places];
        newPlaces.push(newPlace);
        setPlaces(newPlaces);
    }

    const updatePlace = (place, inputValues) => {
        place.update(inputValues);
    }

    return (
        <>
            <div className={`places__wrapper ${style} ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
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