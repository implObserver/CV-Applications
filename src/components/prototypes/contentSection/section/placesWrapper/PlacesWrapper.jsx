import { useState } from "react";
import { State } from "../../../toggle/Toggle";
import { Place } from "./place/Place";

export const PlacesWrapper = () => {
    const visible = State('unvisible__places-wrapper', 'visible__places-wrapper');
    const [places, setPlaces] = useState([]);

    const changeVisible = () => {
        visible.switchState();
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

    const render = (drawIt, form) => (
        <>
            <div className={`places__wrapper ${visible.getState()}`}>
                {(() => {
                    return (
                        <>
                            {
                                places.map((place) => {
                                    return place.render(drawIt, form);
                                })
                            }
                        </>
                    )
                })()}
            </div>
        </>
    )

    return { render, update, changeVisible };
}