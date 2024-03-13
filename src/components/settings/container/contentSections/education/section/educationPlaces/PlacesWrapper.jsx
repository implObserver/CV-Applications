import { useState } from "react"

export const EducationPlacesWrapper = () => {
    const [places, setPlaces] = useState([]);

    const render = (drawIt, form) => (
        <>
            <div className="places__wrapper">
                {(() => {
                    places.forEach(place => {
                        return <>
                            {place}
                        </>;
                    })
                })()}
            </div>
        </>
    )

    return {render};
}